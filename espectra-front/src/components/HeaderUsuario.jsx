import ContainerUserPhoto from "../components/photo-components/ContainerUserPhoto";
import BotaoVoltar from "../components/BotaoVoltar"
import { useNavigate } from "react-router-dom";

export default function HeaderUsuario(){

    const navigate = useNavigate()

    const homeDataString = localStorage.getItem("home");
    const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;
    const fotoUsuarioLogado = homeDataObject?.items?.foto || null;
    const idUsuarioLogado = homeDataObject?.items?.id || null;
    const id_paciente = localStorage.getItem("id_paciente")


    return(
        <header className="flex items-center justify-between mt-4 p-2 md:hidden">
            
            <BotaoVoltar color="blueColor" onClick={()=> navigate(`/perfil-paciente/${id_paciente}`)}/>
            
            <ContainerUserPhoto foto={fotoUsuarioLogado} id={idUsuarioLogado} />
        </header>
    )
}