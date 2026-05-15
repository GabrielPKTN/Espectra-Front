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

function TelaPerfilPaciente() {
  const data = [
    {
      nome: "Socialização",
      idade: 1,
      cor: "#a2e289",
      classe: "cor-socializacao",
    },
    {
      nome: "Cognição",
      idade: 6,
      cor: "#71afff",
      classe: "cor-cognicao",
    },
    {
      nome: "Auto-cuidado",
      idade: 2,
      cor: "#d293f0",
      classe: "cor-autocuidado",
    },
    {
      nome: "Linguagem",
      idade: 3,
      cor: "#ffc87b",
      classe: "cor-linguagem",
    },
    {
      nome: "Desenvolvimento-motor",
      idade: 4,
      cor: "#c8c8c8",
      classe: "cor-devmotor",
    },
  ];

  // função que faz o gráfico ficar maior na tela de computador, considerando o tamanho a partir de 768px.
  const barraGraficoDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const media = window.matchMedia("(min-width: 768px)");
      setIsDesktop(media.matches);

      const listener = (e) => setIsDesktop(e.matches);
      media.addEventListener("change", listener);
    }, []);

    return isDesktop;
  };

  const isDesktop = barraGraficoDesktop();

  return (
    <div
      className="flex flex-col w-screen h-auto p-2 
        lg:bg-[#dfedff]"
    >
      {/*HEADER*/}
      <div className="flex flex-row justify-between p-2">
        <ChevronLeft className="primary-color size-8 lg:size-12" />
        <CircleUser className="primary-color size-10 lg:size-14"></CircleUser>
      </div>

      {/*MAIN*/}
      <div
        className="flex flex-col justify-center items-center
        lg:bg-white lg:p-4 lg:m-6 lg:rounded-4xl"
      >
        {/*Nome e foto do paciente.*/}
        <div className="flex flex-col items-center gap-3 lg:mt-4">
          <CircleUser className="primary-color size-24 lg:size-28"></CircleUser>

          <h1
            className="primary-color font-bold instrument-sans uppercase text-xl
          md:text-2xl
          lg:text-3xl lg:mt-4"
          >
            Nome do paciente
          </h1>
        </div>

        <p
          className="text-center italic primary-color inclusive-san font-lights
              md:text-lg md:px-10
              lg:mt-6 lg:text-[22px] lg:px-30"
        >
          Nome do paciente nasceu em Data, tem Idade, está na 5° Série e possui
          diagnóstico de Diagnostico com grau de suporte X.
        </p>

        <div
          className="flex flex-row gap-1 font-semibold instrument-sans text-base p-3 justify-center
              md:text-lg
              lg:text-[22px] lg:p-4"
        >
          <p className="primary-color">Telefone do responsável:</p>
          <p className="text-gray-700">+55 11 91234-5678</p>
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
                  data={data}
                  margin={{
                    top: 35,
                    right: 30,
                    left: 20,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="nome" tick={false} />
                  <YAxis hide domain={[0, 6]} allowDataOverflow={false} />
                  <Tooltip cursor={{ fill: "transparent" }} />

                  <Bar dataKey="idade" barSize={isDesktop ? 65 : 44}>
                    {data.map((entry, index) => (
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
            <ButtonHabilidade
              color="cor-socializacao"
              colorHover="cor-socializacao-hover"
              type="button"
            >
              Socialização
            </ButtonHabilidade>

            <ButtonHabilidade
              color="cor-cognicao"
              colorHover="cor-cognicao-hover"
              type="button"
            >
              Cognição
            </ButtonHabilidade>

            <ButtonHabilidade
              color="cor-autocuidado"
              colorHover="cor-autocuidado-hover"
              type="button"
            >
              Auto-cuidado
            </ButtonHabilidade>

            <ButtonHabilidade
              color="cor-linguagem"
              colorHover="cor-linguagem-hover"
              type="button"
            >
              Linguagem
            </ButtonHabilidade>

            <ButtonHabilidade
              color="cor-devmotor"
              colorHover="cor-devmotor-hover"
              type="button"
            >
              Desenvolvimento-motor
            </ButtonHabilidade>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 mt-16 items-center lg:flex-row
        lg:w-175 lg:m-8 lg:mt-12"
        >
          <Button
            variantClick="basicClick"
            type="button"
            className="w-full p-3"
          >
            Editar avaliação de desempenho
          </Button>

          <Button variantClick="deleteButton" type="button" className="w-full">
            Remover paciente
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TelaPerfilPaciente;
