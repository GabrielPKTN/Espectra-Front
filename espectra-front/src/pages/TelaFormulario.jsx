import logo from "../assets/logotipos/logo.png";
import psicopedagogo from "../assets/general_photos/psicopedagogo.png";
import Button from "../components/Button";
import CardQuestionFormulario from "../components/CardQuestionFormulario";
import CardTextFormulario from "../components/CardTextFormulario";
import Header from "../components/HeaderFormulario"; // Importe o Header criado
import GroupResposta from "../components/GroupResposta";
import { useNavigate } from "react-router-dom";

function TelaFormulario() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#3277CF] flex flex-col lg:bg-white">
      {/* TOPO: O Header fica fora da div de conteúdo principal */}
      <Header 
        title="0 a 6 anos" 
        userImage={psicopedagogo} // Troque pela sua lógica de imagem
        userName={"Larissa"}
        logoSource={logo} 
      />

      {/* CONTEÚDO BRANCO CHANFRADO */}
      <div className="flex-1 bg-white rounded-t-[20px] px-4 py-8 sm:px-6 md:px-10 lg:px-20 mt-[-30px] shadow-2xl lg:w-[65%] lg:self-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          {/* TÍTULO DA SEÇÃO */}
          <CardTextFormulario
            titulo="Socialização"
            corFundoTitulo="bg-[#A2E289]"
            corTitulo="text-black"
          />

          <div className="flex flex-col gap-8">
            {/* PERGUNTA 01 */}
            <div>
              <CardQuestionFormulario
                numero="1"
                corNumero="bg-[#A2E289]"
                pergunta="Observa uma pessoa movimentando-se em seu campo visual."
                corFundoPergunta="bg-[#F9F9F9]"
                corPergunta="text-black"
                sizePergunta="text-sm sm:text-base md:text-lg"
              />
              <div className="w-full mt-6">
                <GroupResposta
                  opcoes={["Sim", "Não", "Sim, com mediação"]}
                />
              </div>
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div className="w-full flex flex-row items-center justify-center gap-4 mt-10">
              <Button className="w-full sm:w-auto px-10 bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => navigate("/adicionar-paciente")}>
                Cancelar
              </Button>
              <Button className="w-full sm:w-auto px-10 bg-blue-600 hover:bg-blue-700 text-white">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaFormulario;