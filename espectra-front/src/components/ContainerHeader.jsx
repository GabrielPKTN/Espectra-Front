import IconApp from "../assets/logotipos/logo.png"
import ContainerUserPhoto from "./photo-components/ContainerUserPhoto"

function ContainerHeader(props) {

    return <header className="flex justify-between items-center w-full">
        <img src={IconApp} alt="icone da aplicação" className="w-auto h-10" />
        <ContainerUserPhoto foto={props.foto} />
    </header>


}

export default ContainerHeader