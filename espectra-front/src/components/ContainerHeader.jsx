import IconApp from "../assets/logotipos/logo.png"
import ContainerUserPhoto from "./ContainerUserPhoto"

function ContainerHeader() {

    return <header className="flex justify-between w-full">
        <img src={IconApp} alt="icone da aplicação" className="w-auto h-10"/>
        <ContainerUserPhoto size="10" />
    </header>
    

}

export default ContainerHeader