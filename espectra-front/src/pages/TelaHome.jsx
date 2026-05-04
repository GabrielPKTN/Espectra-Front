import InputHome from "../components/input/InputHome.jsx"
import ContainerHeader from "../components/ContainerHeader"
import ContainerPacientes from "../components/ContainerPacientes.jsx"
import Button from "../components/Button.jsx"
import { Filter } from "lucide-react"
import { useState } from "react"

function TelaHome() {

    const [pacientes, setPacientes] = useState([
        {
            "id": 1,
            "foto": "http://azure.blob.img",
            "nome": "Mario Augusto Ramos",
            "data_nascimento": "2010-08-12",
            "idade": 12,
            "diagnostico": "Autismo e TDAH",
            "serie_escolar": "2º Série",
            "grau_suporte": "Grau 3",
            "numero_registro": 2026040001
        },
        // {
        //     "id": 2,
        //     "foto": "http://azure.blob.img/paciente2.jpg",
        //     "nome": "Ana Beatriz Oliveira",
        //     "data_nascimento": "2015-05-22",
        //     "idade": 8,
        //     "diagnostico": "Transtorno do Espectro Autista",
        //     "serie_escolar": "3º Ano",
        //     "grau_suporte": "Grau 1",
        //     "numero_registro": 2026040002
        // },
        // {
        //     "id": 3,
        //     "foto": "http://azure.blob.img/paciente3.jpg",
        //     "nome": "Lucas Henrique Souza",
        //     "data_nascimento": "2012-11-30",
        //     "idade": 11,
        //     "diagnostico": "TDAH e TOD",
        //     "serie_escolar": "5º Ano",
        //     "grau_suporte": "Grau 2",
        //     "numero_registro": 2026040003
        // }
    ])

    return <div className="py-4 px-5 h-screen">

        <ContainerHeader/>
        <main className="flex flex-col h-[90%] justify-between items-center pt-12">
            <div className="flex w-full items-center">
                <InputHome/>
                <Filter className="text-(--bg-primary-color) w-auto pl-2"/>
            </div>
            <div className="w-[90%] items-center">
                <ContainerPacientes pacientes={pacientes}/>
            </div>
            <Button>Adicionar paciente</Button>
        </main>

    </div>

}

export default TelaHome