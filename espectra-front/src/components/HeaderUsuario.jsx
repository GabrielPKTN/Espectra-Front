import ContainerUserPhoto from "../components/photo-components/ContainerUserPhoto";
import BotaoVoltar from "../components/BotaoVoltar"
import { useNavigate } from "react-router-dom";

export default function HeaderUsuario(){

    const navigate = useNavigate()

    const homeDataString = localStorage.getItem("home");
    const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;
    const fotoUsuarioLogado = homeDataObject?.items?.foto || null;
    const idUsuarioLogado = homeDataObject?.items?.id || null;


    return(
        <header className="flex items-center justify-between mt-4 p-2 md:hidden">
            
            <BotaoVoltar color="blueColor" onClick={()=> navigate(-1)}/>
            
            <ContainerUserPhoto foto={fotoUsuarioLogado} id={idUsuarioLogado} />
        </header>
    )
}