import { ChevronLeft } from "lucide-react";
import logotipo from "../assets/logotipos/logo.png";
import default_photo from "../assets/general_photos/default-photo.png";
import InputHome from "../components/input/InputHome";


function TelaAdicionarPaciente() {
  return (
    // div que carrega tudo na tela
    <div className="m-4 flex flex-col ">

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

      {/*div que carregará o card com informações do paciente. Possivelmente vai ser preciso componentizar.*/}
      <div></div>

    </div>
      
  )
}

export default TelaAdicionarPaciente;
