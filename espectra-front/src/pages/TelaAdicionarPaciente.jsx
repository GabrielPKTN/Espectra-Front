import { ChevronLeft } from "lucide-react";
import logotipo from "../assets/logotipos/logo.png";
import default_photo from "../assets/general_photos/default-photo.png";
import InputHome from "../components/input/InputHome";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { CircleUser } from 'lucide-react';


function TelaAdicionarPaciente() {

  const navigate = useNavigate()

  return (
    // div que carrega tudo na tela
    <div className="m-4 flex flex-col">

      {/*div do header*/}
      <div className="flex justify-between items-center lg:mt-2">
        <button onClick={()=> navigate("/home")}>
          <ChevronLeft 
          className="primary-color size-10
          lg:size-11"/>
        </button>

      
      <img src={logotipo} alt="logotipo do app" 
      className="size-10 w-auto
      lg:size-14 lg:w-auto"/>

    <CircleUser className="size-12 lg:size-16 primary-color"></CircleUser>
      </div>

      {/*div do input*/}
      <div className=" flex flex-col mt-12 items-center justify-center gap-12
      lg:w-162.5 lg:mx-auto lg:gap-8 lg:mt-8">
        <p className="text-center text-2xl inclusive-sans font-medium
        lg:text-3xl">
          Digite o CPF do paciente
        </p>
        <InputHome></InputHome>
      </div>

      {/*div que carregará o card cinza com informações do paciente.*/}
      <div className="bg-gray-200 h-auto w-full mt-8 rounded-2xl shadow-lg/20 border border-[#C9C9C9]
      md:mt-12 md:h-125
      lg:w-175 lg:mx-auto lg:h-90 lg:mt-10">
        <div className="flex flex-col justify-center items-center gap-4 mb-4">

        <CircleUser className="size-16 primary-color mt-5
        md:mt-18 md:size-22
        lg:mt-8 lg:size-20">
        </CircleUser>


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

      <div className="flex flex-col justify-center items-center gap-4 mt-5
      lg:flex lg:flex-row">      

      {/*Nestes buttons vai ser necessário adicionar a rota da tela do formulário ou retorná-lo para a tela home,
        já com o novo paciente adicionado.*/}  
          <Button
            variantClick="basicClick"
            // *onClick={}*/ 
          >
            Iniciar avaliação
          </Button>

          <Button
            variantClick="basicClick"
            onClick={()=> navigate("/home")}
          >
            Adicionar paciente
          </Button>
        </div>
    </div>
      
  )
}

export default TelaAdicionarPaciente;
