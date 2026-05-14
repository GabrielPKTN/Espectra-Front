import { useState } from "react";
import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
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
                    className="w-[45px] h-[32px] -mt-14 cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                />
            </div>
            
        </>

    )
}

export default PerfilPsicopedagogo;