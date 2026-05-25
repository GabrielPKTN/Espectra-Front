import { ChevronLeft } from "lucide-react";
import logotipo from "../assets/logotipos/logo.png";
import InputHome from "../components/input/InputHome";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import ContainerUserPhoto from "../components/photo-components/ContainerUserPhoto";
import toast from "react-hot-toast";

function TelaAdicionarPaciente() {
  const [cpf, setCpf] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const idUsuarioLogado = localStorage.getItem("id_usuario");

  async function buscarPacientePorCpf() {
    try {
      setLoading(true);
      setErro(null);
      setPaciente(null);

      const token = localStorage.getItem("token");
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTI4MjM1NywiZXhwIjoxMDAwMDE3NzkyODIzNTd9.Gg83eaBKGXg2Xa9tNm5rjAxXn9_8mJxj4w2GBG756yk"

      if (!cpf.trim()) {
        setErro("Digite um CPF!");
        return;
      }

      if (!token) {
        setErro("Token não encontrado!");
        return;
      }

      const response = await axios.get(
        `http://localhost:8080/v1/espectra/paciente`,
        {
          params: {
            cpf: cpf,
          },
          headers: {
            "x-access-token": token,
          },
        },
      );

      if (
        (response.data.items && response.data.items > 0) ||
        response.data.items.id
      ) {
        const dadosPaciente = Array.isArray(response.data.items)
          ? response.data.items[0]
          : response.data.items;

        setPaciente(dadosPaciente);
        toast.success("Paciente encontrado!");
      } else {
        toast.error("Nenhum paciente encontrado!");
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 500) {
        setErro("Erro interno no servidor (500).");
      } else {
        toast.error("Paciente não encontrado. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function adicionarPaciente() {
    if (!paciente) {
      setErro("Busque um paciente!");
      return;
    }

    try {
      await axios.post(
        `http://localhost:8080/v1/espectra/paciente/${paciente.id}/${idUsuarioLogado}`,
        {
          id_paciente: paciente.id,
          id_usuario: Number(idUsuarioLogado),
        },
        {
          headers: {
            "x-access-token": token,
          },
        },
      );

      toast.success("Paciente adicionado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErro("Erro ao adicionar paciente!");
    }
  }

  return (
    // div que carrega tudo na tela
    <div className="m-4 flex flex-col">
      {/*div do header*/}
      <div className="flex justify-between items-center lg:mt-2">
        <button onClick={() => navigate("/home")}>
          <ChevronLeft
            className="primary-color size-10 cursor-pointer
          lg:size-11"
          />
        </button>

        <img
          src={logotipo}
          alt="logotipo do app"
          className="size-10 w-auto
      lg:size-12 lg:w-auto"
        />

        <ContainerUserPhoto />
      </div>

      {/*div do input*/}
      <div
        className=" flex flex-col mt-12 items-center justify-center gap-12
      lg:w-162.5 lg:mx-auto lg:gap-8 lg:mt-8"
      >
        <p
          className="text-center text-2xl inclusive-sans font-medium
        lg:text-3xl"
        >
          Digite o CPF do paciente
        </p>
        <InputHome
          value={cpf}
          placeholder="Digite o CPF do paciente..."
          onChange={setCpf}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              buscarPacientePorCpf();
            }
          }}
          onSearch={buscarPacientePorCpf}
        />
      </div>

      {loading && <p className="text-center mt-4">Buscando paciente...</p>}

      {erro && (
        <p className="text-center mt-4 text-bold text-red-500">{erro}</p>
      )}

      {/*div que carregará o card cinza com informações do paciente.*/}
      {paciente && (
        <div
          className="bg-gray-200 h-auto w-full mt-8 rounded-2xl shadow-lg/20 border border-[#C9C9C9]
      md:mt-12 md:h-125
      lg:w-175 lg:mx-auto lg:h-90 lg:mt-10"
        >
          <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <CircleUser
              className="size-16 primary-color mt-5
        md:mt-18 md:size-22
        lg:mt-8 lg:size-20"
            ></CircleUser>

            <h1
              className="primary-color font-bold text-2xl instrument-sans
        md:text-3xl md:mt-4 "
            >
              {paciente.nome}
            </h1>

            <p
              className="primary-color font-inclusive-sans text-center text-lg p-2 font-medium italic
        md:text-2xl"
            >
              {paciente.nome} nasceu em {paciente.data_nascimento}, tem{" "}
              {paciente.idade}, está na {paciente.serie_escolar} e possui
              diagnóstico de{" "}
              {paciente.diagnostico
                ?.map((diag) => diag.nome_completo)
                .join(", ")}{" "}
              com {paciente.grau_suporte}.
            </p>
          </div>
        </div>
      )}

      <div
        className="flex flex-col justify-center items-center gap-4 mt-5
      lg:flex lg:flex-row"
      >
        <Button
          variantClick="basicClick"
          onClick={() => {
            if (paciente) {
              navigate(`/formulario/${paciente.id}/${idUsuarioLogado}`);
            } else {
              setErro("Busque um paciente antes de iniciar a avaliação!");
            }
          }}
        >
          Iniciar avaliação
        </Button>

        <Button
          variantClick="basicClick"
          onClick={adicionarPaciente}
          disabled={!paciente}
          className="lg:w-52"
        >
          Adicionar paciente
        </Button>
      </div>
    </div>
  );
}

export default TelaAdicionarPaciente;
