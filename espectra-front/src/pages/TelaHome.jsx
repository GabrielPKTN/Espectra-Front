import InputHome from "../components/input/InputHome.jsx"
import ContainerHeader from "../components/ContainerHeader"
import Button from "../components/Button.jsx"
import { Filter } from "lucide-react"

function TelaHome() {

    return <div className="py-4 px-5 h-screen">

        <ContainerHeader/>
        <main className="flex flex-col h-[90%] justify-between items-center pt-12">
            <div className="flex w-full items-center">
                <InputHome/>
                <Filter className="text-(--bg-primary-color) w-auto pl-2"/>
            </div>
            <div className="">
                <p className="font-instrument-sans text-2xl font-semibold text-(--bg-primary-color) px-4 text-center">Selecione um paciente, ou adicione um.</p>
            </div>
            <Button>Adicionar paciente</Button>
        </main>

    </div>

}

export default TelaHome