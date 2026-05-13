import Button from "../components/Button";
import CardQuestionFormulario from "../components/CardQuestionFormulario";
import CardTextFormulario from "../components/CardTextFormulario";
import { useNavigate } from "react-router-dom";
import GroupResposta from "../components/GroupResposta";

function TelaFormulario() {
  const navigate = useNavigate();

  return (
    <div className=" instrument-sans min-h-screen px-4 py-5 sm:px-6 md:px-10 lg:px-20 flex flex-col gap-8">
      {/* TÍTULO */}
      <CardTextFormulario
        titulo="Socialização"
        corFundoTitulo="bg-[#A2E289]"
        corTitulo="text-black"
      />
      <div className="Inclusive Sans gap-8 ">
        {/* PERGUNTA */}
        <CardQuestionFormulario
          numero="1"
          corNumero="bg-[#A2E289]"
          pergunta="Observa uma pessoa movimentando-se em seu campo visual."
          corFundoPergunta="bg-[#F9F9F9]"
          corPergunta="text-black"
          sizePergunta="text-sm sm:text-base md:text-lg"
        />

        {/* RESPOSTAS */}
        <div className="w-full mt-10">
          <GroupResposta opcoes={["Sim", "Não", "Sim, com mediação"]} />
        </div>

        {/* BOTÕES */}
        <div
          className=" w-full flex flex-col sm:flex-row items-center justify-center gap-50 mt-15
        "
        >
          <Button>Cancelar</Button>

          <Button>Enviar</Button>
        </div>
      </div>
    </div>
  );
}

export default TelaFormulario;
