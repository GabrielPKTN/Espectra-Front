import { ChevronLeft } from "lucide-react";
import logotipo from "../assets/logotipos/logo.png";
import default_photo from "../assets/general_photos/default-photo.png";
import InputHome from "../components/input/InputHome";
import Button from "../components/Button";


function TelaAdicionarPaciente() {
  return (
    // div que carrega tudo na tela
    <div className="m-4 flex flex-col">

      {/*div do header*/}
      <div className="flex justify-between items-center">
      <ChevronLeft className="primary-color size-10"/>
      <img src={logotipo} alt="logotipo do app" className="size-10 w-auto"/>
      <img src={default_photo} alt="foto usuario" className="size-12" />
      </div>

      {/*div do input*/}
      <div className=" flex flex-col mt-12 items-center justify-center gap-12">
        <p className="text-center text-2xl inclusive-sans font-medium">Digite o CPF do paciente</p>
        <InputHome></InputHome>
      </div>

      {/*div que carregará o card cinza com informações do paciente. Possivelmente vai ser preciso componentizar.*/}
      <div className="bg-gray-200 h-auto w-full mt-8 rounded-2xl shadow-lg/20 border border-[#C9C9C9]
      md:mt-12 md:h-125">
        <div className="flex flex-col justify-center items-center gap-4 mb-4">

        <img src={default_photo}
        alt="foto usuario"
        className="w-20 h-20 mt-5
          md:w-28 md:h-28 md:mt-18"/>

        <h1 className="primary-color font-bold text-2xl instrument-sans
        md:text-3xl md:mt-4">
          NOME USUÁRIO
        </h1>

        <p className="primary-color font-inclusive-sans text-center text-lg p-2 font-medium italic
        md:text-2xl">
        NOME USUÁRIO nasceu em DATA, tem IDADE,
        está na SERIE-ESCOLA e possui diagnóstico de DIAGNOSTICO com grau de suporte X.
        </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-5">        
          <Button
            variantClick="basicClick"
            // *onClick={}*/ 
          >
            Iniciar avaliação
          </Button>

          <Button
            variantClick="basicClick"
            // *onClick={}*/ 
          >
            Adicionar paciente
          </Button>
        </div>
    </div>
      
  )
}

export default TelaAdicionarPaciente;
