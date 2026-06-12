import IconApp from "../assets/logotipos/logo.png"
import ContainerUserPhoto from "./photo-components/ContainerUserPhoto.jsx"
import Logotipo from "./Logotipo.jsx"

function ContainerHeader(props) {

    return <header className="flex justify-between items-center w-full">
        <Logotipo />
        <ContainerUserPhoto foto={props.foto} id={props.id} />
    </header>


}

export default ContainerHeader