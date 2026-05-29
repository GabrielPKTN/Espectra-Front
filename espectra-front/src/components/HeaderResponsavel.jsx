
import logo from "../assets/logotipos/logo.png"
import backArrow from "../assets/general_photos/backArrow.svg"
import ContainerUserPhoto from "./photo-components/ContainerUserPhoto";
import Logotipo from "./logotipo";
import BotaoVoltar from "./BotaoVoltar"
import { useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";

export default function HeaderResponsavel({ nome, foto }) {
    const navigate = useNavigate();
    const imagemUsuario = typeof foto === "string";
    const iconePadrao = foto;

    const idUsuario = localStorage.getItem('id_usuario');

    return (
        <header className="flex items-center justify-between p-6 lg:bg-(--bg-primary-color)">

            <BotaoVoltar color="blueColor" className="hidden md:block lg:hidden" />
            <img src={logo} alt="" className="w-auto size-8 flex items-center md:size-10 md:w-auto md:hidden lg:block lg:w-20 lg:h-auto" />
            {/* <img src={backArrow} alt="" className="hidden md:block md:lg:hidden" /> */}


            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <p className="
                        hidden 
                        md:block md:instrument-sans md:font-bold md:text-(--bg-primary-color) 
                        lg:text-white lg:text-2xl"
                    >
                        Olá, {nome}!
                    </p>
                    <button
                        onClick={() => navigate(`/perfil/${idUsuario}`)}
                        className="hidden lg:block lg:text-white underline lg:self-end lg:instrument-sans lg:italic cursor-pointer">Abrir perfil
                    </button>
                </div>

                {imagemUsuario ? (
                    <img src={foto} alt="" className="border-2 border-(--bg-primary-color) rounded-full w-12 h-12 lg:w-16 lg:h-16 object-cover" />
                ) : (
                    <CircleUser className="w-12 h-12 lg:w-18" />
                )}


            </div>
        </header>
    )
}