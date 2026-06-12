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
import api from "../services/api.js"

function TelaAdicionarPaciente() {
  const [cpf, setCpf] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const idUsuarioLogado = localStorage.getItem("id_usuario");

  const homeDataString = localStorage.getItem("home");
  const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;
  const fotoUsuarioLogado = homeDataObject?.items?.foto || null;
  const idUsuario = homeDataObject?.items?.id || null;

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
        console.error("Token não encontrado no localStorage.");
        toast.error("A sessão expirou. Faça login novamente!");
        navigate("/login");
        return;
      }

      const response = await api.get(
        `/v1/espectra/paciente`,
        {
          params: {
            cpf: cpf.replace(/\D/g, ""),
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
      await api.post(
        `/v1/espectra/paciente/${paciente.id}/${idUsuarioLogado}`,
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

    } catch (error) {
      console.error(error);
      setErro("Erro ao adicionar paciente!");
    }
  }

  const formatarCPF = (value) =>{
    const apenasNumeros = value.replace(/\D/g, "");

    const cpfLimitado = apenasNumeros.slice(0, 11);
    
    return cpfLimitado
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
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

        <ContainerUserPhoto foto={fotoUsuarioLogado} id={idUsuario} />
      </div>

      {/*div do input*/}
      <div
        className=" flex flex-col mt-12 items-center justify-center gap-12
      lg:w-162.5 lg:mx-auto lg:gap-4 lg:mt-8"
      >
        <p
          className="text-center text-2xl inclusive-sans font-medium
        lg:text-2xl"
        >
          Digite o CPF do paciente
        </p>
        <InputHome
          value={cpf}
          placeholder="Digite o CPF do paciente..."
          onChange={(valor) => setCpf(formatarCPF(valor))}
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
          className="bg-gray-200 h-auto pb-6 w-full mt-8 rounded-2xl shadow-lg/20 border border-[#C9C9C9]
      md:mt-12 md:pb-10
      lg:w-175 lg:mx-auto lg:mt-8"
        >
          <div className="flex flex-col items-center gap-4 mb-4 lg:mx-6">

            <div className="flex mt-10 scale-150 md:mt-24 lg:mt-14">
              <ContainerUserPhoto foto={paciente.foto} id={paciente.id || paciente.id_paciente}/>
            </div>
            

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
              {paciente.idade} anos, cursa o {paciente.serie_escolar} e possui
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
              const idPacienteValido = paciente.id || paciente.id_paciente;
              adicionarPaciente();
              navigate(`/formulario/${idPacienteValido}/${idUsuarioLogado}`);
            } else {
              setErro("Busque um paciente antes de iniciar a avaliação!");
            }
          }}
        >
          Iniciar avaliação
        </Button>

        <Button
          variantClick="basicClick"
          onClick={async () => {
            await adicionarPaciente()
            navigate("/home");
          }
          }
          disabled={!paciente}
          className="lg:w-56"
        >
          Adicionar paciente
        </Button>
      </div>
    </div>
  );
}

export default TelaAdicionarPaciente;
