import { CircleUser } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import LegendaHabilidade from "../components/LegendaHabilidade";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import ButtonHabilidade from "../components/ButtonHabilidade";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function TelaPerfilPaciente() {
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id, id_usuario } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarDadosPaciente() {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get(`/v1/espectra/paciente/${id}`, {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTI4NDMxNCwiZXhwIjoxMDAwMDE3NzkyODQzMTR9.UOg-xBGzA-huon-aWoc-ax9yX3Gn8vPmqCDre3CxLAQ",
          },
        });

        if (response.data.items) {
          setPaciente(response.data.items);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do paciente: ", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarDadosPaciente();
    }
  }, [id]);

  async function getUsuarioById() {
    try {
      const response = await api.get(`/v1/espectra/usuario/${id_usuario}`, {
        headers: {
          "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Usuário não encontrado!");
      return null;
    }
  }

  async function removerPaciente() {
    const dadosUsuario = await getUsuarioById();

    if (dadosUsuario) {
      toast.error("Não foi possivel validar o usuário antes da exclusão.");
      return;
    }

    const confirmar = window.confirm(
      "Tem certeza que desejoa remover esse paciente?",
    );
    if (!confirmar) return;

    try {
      const idUsuarioParaDeletar = dadosUsuario.id || id_usuario;

      const token = localStorage.getItem("token");

      // if (!token) {
      //   toast.error("Usuário não autenticado.");
      //   return;
      // }

      const response = await api.delete(
        `/v1/espectra/paciente/${id}/${idUsuarioParaDeletar}`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTI4NDMxNCwiZXhwIjoxMDAwMDE3NzkyODQzMTR9.UOg-xBGzA-huon-aWoc-ax9yX3Gn8vPmqCDre3CxLAQ",
          },
        },
      );

      if (response.status === 200) {
        toast.success("Paciente removido com sucesso!");
        navigate(-1);
      } else {
        toast.error("Houve um erro ao remover este paciente!");
      }
    } catch (error) {
      console.error("Erro ao apagar paciente: ", error);
      const mensagemErro =
        error.response?.data?.message || "Erro ao remover paciente";
      toast.error(mensagemErro);
    }
  }

  // função que faz o gráfico ficar maior na tela de computador, considerando o tamanho a partir de 768px.
  const estiloHabilidade = (nomeHabilidade) => {
    const nomeFormatado = nomeHabilidade.toLowerCase().trim();
    if (nomeFormatado.includes("socializa")) {
      return { cor: "#a2e289", classe: "cor-socializacao" };
    }
    if (nomeFormatado.includes("cogni")) {
      return { cor: "#71afff", classe: "cor-cognicao" };
    }
    if (nomeFormatado.includes("cuidado") || nomeFormatado.includes("auto")) {
      return { cor: "#d293f0", classe: "cor-autocuidado" };
    }
    if (nomeFormatado.includes("lingua")) {
      return { cor: "#ffc87b", classe: "cor-linguagem" };
    }
    if (
      nomeFormatado.includes("motor") ||
      nomeFormatado.includes("desenvolv")
    ) {
      return { cor: "#c8c8c8", classe: "cor-devmotor" };
    }
    return { cor: "#cccccc", classe: "cor-padrao" }; // Fallback
  };

  const formatarDadosGrafico = () => {
    if (!paciente || !paciente.grafico) return [];

    return paciente.grafico.map((hab) => {
      const estilo = estiloHabilidade(hab.nome);

      const valorIdade = Math.round(hab.idade_meses / 12) || hab.idade_meses;

      return {
        id: hab.id,
        nome: hab.nome,
        idade: valorIdade,
        cor: estilo.cor,
        classe: estilo.classe,
      };
    });
  };

  const dadosGrafico = formatarDadosGrafico();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);

    const listener = (e) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#dfedff]">
        <p className="text-xl font-bold primary-color animate-pulse">
          Carregando dados do paciente...
        </p>
      </div>
    );
  }

  if (!paciente) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#dfedff]">
        <p className="text-xl font-bold text-red-500">
          Paciente não encontrado.
        </p>
      </div>
    );
  }

  const primeiroResponsavel = paciente.responsavel[0];

  const listaDiagnosticos = paciente.diagnostico
    ?.map((d) => `${d.nome_completo} (${d.sigla})`)
    .join(", ");

  return (
    <div className="lg:bg-[#dfedff] flex flex-col justify-between gap-2 lg:h-auto lg:overflow-hidden">
      {/*HEADER*/}
      <div className="flex flex-row justify-between p-2 m-2 lg:m-0.5">
        <ChevronLeft
          className="primary-color size-8 lg:size-10 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <CircleUser className="primary-color size-10 lg:size-12"></CircleUser>
      </div>

      <div
        className="flex flex-col w-screen h-fit p-2 
        lg:bg-[#dfedff] lg:h-auto lg:justify-start lg:items-center
        xl:bg-[#dfedff] xl:h-screen"
      >
        {/*MAIN*/}
        <div
          className="flex flex-col justify-center items-center
        lg:bg-white lg:p-1 lg:rounded-4xl lg:max-w-max"
        >
          {/*Nome e foto do paciente.*/}
          <div className="flex flex-col items-center gap-3 lg:mt-4">
            {paciente.foto ? (
              <img
                src={paciente.foto}
                alt={paciente.nome}
                className="size-24 lg:size-24 rounded-full object-cover border-2 border-blue-500"
              />
            ) : (
              <CircleUser className="primary-color size-24 lg:size-24"></CircleUser>
            )}

            <h1
              className="primary-color font-bold instrument-sans uppercase text-xl
          md:text-2xl
          lg:text-2xl lg:mt-4"
            >
              {paciente.nome}
            </h1>
          </div>

          <p
            className="text-center italic primary-color inclusive-san font-lights
              md:text-lg md:px-10
              lg:mt-6 lg:text-[18px] lg:px-30"
          >
            {paciente.nome} nasceu em {paciente.data_nascimento}, tem{" "}
            {paciente.idade} anos, está na {paciente.serie_escolar} e possui
            diagnóstico de {listaDiagnosticos} com grau de suporte{" "}
            {paciente.grau_suporte}
          </p>

          <div
            className="flex flex-row gap-1 font-semibold instrument-sans text-base p-3 justify-center
              md:text-lg
              lg:text-[20px] lg:p-4"
          >
            <p className="primary-color">Telefone do responsável:</p>
            <p className="text-gray-700">{primeiroResponsavel.telefone}</p>
          </div>

          <div className="flex flex-col w-screen lg:grid lg:grid-cols-2 lg:gap-x-10 lg:w-full">
            <div
              className="mt-5 flex flex-col 
            lg:order-2"
            >
              <h2 className="secondary-color font-semibold text-2xl instrument-sans text-center">
                Gráfico de desempenho
              </h2>

              {/*GRAFICO*/}
              <div className="h-64 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dadosGrafico}
                    margin={{
                      top: 35,
                      right: 30,
                      left: 20,
                      bottom: 0,
                    }}
                  >
                    <XAxis dataKey="nome" tick={false} />
                    <YAxis
                      hide
                      domain={[0, "dataMax + 2"]}
                      allowDataOverflow={false}
                    />
                    <Tooltip cursor={{ fill: "transparent" }} />

                    <Bar dataKey="idade" barSize={isDesktop ? 65 : 44}>
                      {dadosGrafico.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.cor} />
                      ))}

                      <LabelList
                        dataKey="idade"
                        position="top"
                        offset={10}
                        className="instrument-sans"
                        formatter={(value) =>
                          `${value} ${value === 1 ? "ano" : "anos"}`
                        }
                        style={{
                          fill: "#000000",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/*Lista de habilidades. NECESSÁRIO ADICIONAR OS ONCLICK QUE DIRECIONAM PARA A TELA DAS RESPECTIVAS HABILIDADES.*/}
            <div className="px-8 mt-6 w-full flex flex-col justify-center gap-4">
              <h2 className="text-center font-semibold instrument-sans secondary-color text-2xl">
                Habilidades
              </h2>

              {dadosGrafico.map((hab, index) => (
                <ButtonHabilidade
                  key={index}
                  color={hab.classe}
                  colorHover={`${hab.classe}-hover`}
                  type="button"
                  onClick={() => navigate(`/atividade/${id}/${hab.id}`)}
                >
                  {hab.nome}
                </ButtonHabilidade>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col gap-4 mt-16 items-center lg:flex-row
        lg:w-175 lg:m-8 lg:mt-8"
          >
            <Button
              variantClick="basicClick"
              type="button"
              className="w-full p-3"
            >
              Editar avaliação de desempenho
            </Button>

            <Button
              onClick={removerPaciente}
              variantClick="deleteButton"
              type="button"
              className="w-full"
            >
              Remover paciente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaPerfilPaciente;
