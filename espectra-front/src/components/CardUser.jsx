import userPhoto from "../assets/general_photos/userPhoto.png"
import home from "../assets/general_photos/home.svg"
import add from "../assets/general_photos/add.svg"
import { useNavigate } from "react-router-dom"


export default function CardUser(){

    const navigate = useNavigate()

    return(
        <div className="
        hidden 
        md:flex md:flex-col md:w-[60%] md:gap-10 md:p-4  md:shadow-[10px_0_15px_-3px_rgba(0,0,0,0.3)] rounded-3xl
        lg:w-[40%]"
        >

        <div className="flex items-center gap-4">

            <img src={userPhoto} alt="" className="lg:w-20" />

            <div className="flex flex-col ">
                <p className="instrument-sans text-xl font-bold text-[var(--bg-primary-color)] lg:text-3xl">Olá, Larissa</p>
                <span className="hidden lg:block lg:instrument-sans lg:text-md lg:text-[var(--bg-primary-color)] lg:underline lg:cursor-pointer">Abrir perfil</span>
            </div>
            

        </div>

        <div className="flex flex-col gap-4 pl-2 lg:mt-3">

            <div className="
                flex gap-3 cursor-pointer"
                onClick={() => {
                    navigate('/home')
                }}
                >

                <img src={home} alt="" className="lg:w-8"/>

                <span className="instrument-sans font-bold text-[var(--bg-primary-color)] text-lg lg:text-2xl">Início</span>

            </div>

            <div className="
                flex gap-3 cursor-pointer" 
                
                onClick={() => {
                    navigate('/atividades/adicionar')
                }} 
                
                >

                <img src={add} alt="" className="md:w-7 lg:w-8"/>

                <span className="instrument-sans font-bold text-[var(--bg-primary-color)] text-lg lg:text-2xl">Adicionar atividade</span>

            </div>
        </div>

        
    </div>
    )
}