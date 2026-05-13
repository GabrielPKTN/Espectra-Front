import { CircleUser } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import LegendaHabilidade from "../components/LegendaHabilidade";

function TelaPerfilPaciente() {
  return (
    <div className=" flex flex-col w-screen h-auto p-2 ">
      {/*HEADER*/}
      <div className="flex flex-row justify-between p-2">
        <ChevronLeft className="primary-color size-8" />
        <CircleUser className="primary-color size-10"></CircleUser>
      </div>

      {/*MAIN*/}
      <div className="flex flex-col justify-center items-center">
        {/*Dados do paciente.*/}
        <div className="flex flex-col items-center gap-3">
          <CircleUser className="primary-color size-24"></CircleUser>

          <h1 className="primary-color font-bold instrument-sans uppercase text-xl">
            Nome do paciente
          </h1>

          <p className="text-center italic primary-color inclusive-san font-lights">
            Nome do paciente nasceu em Data, tem Idade, está na 5° Série e
            possui diagnóstico de Diagnostico com grau de suporte X.
          </p>

          <div className="flex flex-row gap-1 font-semibold instrument-sans text-base p-3">
            <p className="primary-color">Telefone do responsável:</p>
            <p>+55 11 91234-5678</p>
          </div>
        </div>

        {/*Informações de desempenho*/}
        <div className="mt-5">
          <h2 className="secondary-color font-semibold text-2xl instrument-sans">
            Gráfico de desempenho
          </h2>

          {/*Legenda*/}
          <div>
            <LegendaHabilidade color="cor-socializacao">
              Socialização
            </LegendaHabilidade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaPerfilPaciente;
