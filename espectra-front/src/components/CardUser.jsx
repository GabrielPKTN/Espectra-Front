import ContainerUserPhoto from "../components/photo-components/ContainerUserPhoto";
import home from "../assets/general_photos/home.svg"
import add from "../assets/general_photos/add.svg"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import { User } from "lucide-react";

export default function CardUser() {

    const navigate = useNavigate()

    const token = localStorage.getItem("token");

    const homeDataString = localStorage.getItem("home");
    const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;
    const fotoUsuarioLogado = homeDataObject?.items?.foto || null;
    const idUsuarioLogado = homeDataObject?.items?.id || null;

    const idPacienteAtividade = localStorage.getItem("id_paciente")

    const [nomeUsuario, setNomeUsuario] = useState("Usuário")


    const getDadosUsuarios = async () => {

        if (!idUsuarioLogado) return

        try {
            const result = await api.get(`/v1/espectra/usuario/${idUsuarioLogado}`, {
                headers: { "x-access-token": token },
            })
            console.log(result.data)

            setNomeUsuario(result.data.items.nome)
        } catch (error) {
            console.error("Erro ao carregar dados do usuário", error);
        }
    }

    useEffect(() => {
        if (!token) {
            console.error("Token não encontrado no localStorage.");
            toast.error("A sessão expirou. Faça login novamente!");
            navigate("/login");
            return;
        }

        getDadosUsuarios();
    }, [idUsuarioLogado]);


    return (
        <div className="
        hidden 
        md:shrink-0 md:flex md:flex-col md:w-[40%] md:gap-8 md:p-4  md:shadow-[10px_0_15px_-3px_rgba(0,0,0,0.3)] rounded-3xl
        lg:w-[22%] lg:shrink-0"
        >

            <div className="flex items-center mt-3 ml-2">

                <ContainerUserPhoto foto={fotoUsuarioLogado} id={idUsuarioLogado} />

                <div className="flex flex-col pl-4">
                    <p className="instrument-sans text-xl font-bold text-(--bg-primary-color) lg:text-xl lg:mt-2">Olá, {nomeUsuario}</p>
                    <span className="hidden lg:block lg:instrument-sans lg:italic lg:text-md lg:text-(--bg-primary-color) lg:underline lg:cursor-pointer">Abrir perfil</span>
                </div>


            </div>

            <div className="flex flex-col gap-5 ml-4 lg:mt-3">

                <div className="
                flex gap-3 cursor-pointer"
                    onClick={() => {
                        navigate('/home')
                    }}
                >

                    <img src={home} alt="" className="md:w-6 lg:w-6" />

                    <span className="instrument-sans font-bold text-(--bg-primary-color) text-lg lg:text-2xl">Início</span>

                </div>

                <div className="
                flex gap-3 cursor-pointer"

                    onClick={() => {
                        navigate('/atividades/adicionar')
                    }}

                >

                    <img src={add} alt="" className="md:w-5 lg:w-6" />

                    <span className="instrument-sans font-bold text-(--bg-primary-color) text-lg lg:text-2xl">Adicionar atividade</span>

                </div>

                {idPacienteAtividade && (
                    <div className="flex gap-3 cursor-pointer items-center"
                        onClick={() => {
                            navigate(`/perfil-paciente/${idPacienteAtividade}`)
                        }}>
                        <User strokeWidth={3} className="md:size-6 lg:size-6 text-(--bg-primary-color)] text-(--bg-primary-color)" />
                        <span className="instrument-sans font-bold text-(--bg-primary-color) text-lg lg:text-2xl">Perfil do Paciente</span>
                    </div>
                )}
            </div>


        </div>
    )
}