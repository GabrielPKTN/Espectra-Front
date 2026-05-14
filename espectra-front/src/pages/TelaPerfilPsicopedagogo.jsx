import { useState } from "react";
import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import InputPerfil from "../components/InputPerfil";
import Button from "../components/Button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PerfilPsicopedagogo() {

    const navigate = useNavigate()

    const [abrirModal, setAbrirModal] = useState(false)

    return (
        <>
            {/* Div do Header */}
            <div
                className="flex justify-between items-center h-[130px] md:h-[115px] lg:h-[146px] px-4 bg-[#3277CF]"
            >
                <ChevronLeft
                    className="-mt-14 -ml-2 w-[31px] h-[31px] md:h-[50px] md:w-[50px] lg:w-[50px] lg:h-[50px] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                    color="#F9F9F9"
                />

                <img
                    src={logo}
                    alt="Logo Espectra"
                    onClick="" //onClick -> Volta para a tela Home do Psicopedagogo
                    className="w-[48px] h-[32px] -mt-14 cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                />
            </div>

            {/* Div da foto do psicopedagogo */}
            <div className="flex justify-center -mt-18 z-10 relative md:-mt-22 lg:-mt-24">
                <img
                    src={fotoPsicopedagogo}
                    alt="Foto do psicopedagogo"
                    onClick=""
                    className="w-[148px] h-[148px] border-[#3277CF] border-4 rounded-full object-contain md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                />
            </div>

            {/* Div do Nome do Psicopedagogo */}
            <div className="flex justify-center items-center w-full mt-2">
                <h1 className="text-[#3277CF] text-[28px] font-inclusive-sans font-bold uppercase">
                    Larissa Almeida Lessa
                </h1>
            </div>

            {/* Div que guarda os dados do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full">

                {/* Div que guarda Label e Input de Nome */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Nome"
                        value="Larissa Almeida Lessa"
                    />
                </div>

                {/* Div que guarda Label e Input de Data de Nascimento */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Data de Nascimento"
                        value="10/05/2025"
                    />
                </div>

                {/* Div que guarda Label e Input de Email */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Email"
                        value="larissa@gmail.com"
                    />
                </div>

                {/* Div que guarda Label e Input de Telefone */}
                <div className="flex justify-center w-full">
                    <InputPerfil
                        label="Telefone"
                        value="+55 11 9 6207-1110"
                    />
                </div>

                {/* Div dos botões */}
                <div className="flex flex-col justify-center items-center w-full mt-2">
                    <Button 
                        className="w-[170px] text-[#3277CF]"
                        color="#FFFFFF"
                    >
                        Editar perfil
                    </Button>

                    <Button
                        variantClick="basicClick"
                        onClick=""
                        className="mt-4 w-[170px]"
                    >
                        Excluir conta
                    </Button>
                </div>
            </div>
        </>

    )
}

export default PerfilPsicopedagogo;