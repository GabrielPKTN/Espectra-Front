import IconApp from "../assets/logotipos/logo.png"
import ContainerUserPhoto from "./photo-components/ContainerUserPhoto"

function ContainerHeader() {

    return <header className="flex justify-between w-full md:px-4 md:py-6">
        <img src={IconApp} alt="icone da aplicação" className="w-auto h-10"/>
        <ContainerUserPhoto/>
    </header>
    

}

export default ContainerHeader