import InputHome from "../components/input/InputHome.jsx";
import ContainerHeader from "../components/ContainerHeader";
import ContainerPacientes from "../components/ContainerPacientes.jsx";
import Button from "../components/Button.jsx";
import app from "../services/api.js"
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TelaHome() {

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState([]);
    const [busca, setBusca] = useState("");

    const pacientesFiltrados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(busca.toLowerCase()),
    );

    console.log(pacientesFiltrados)

    localStorage.setItem(

        "id_usuario", 1

    )

    localStorage.setItem(

        "token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTEzNjcwNiwiZXhwIjoxMDAwMDE3NzkxMzY3MDZ9.Ao3CYRUsrq-Wn9cHhobuEc3kRsTibpzdXTayJFVc8xE"

    )

    const requestData = async () => {

        try {

            const result = await app.get(`/v1/espectra/usuario/home/${localStorage.getItem('id_usuario')}`,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )

            let rawData = result.data

            const jsonHome = JSON.stringify(rawData)
            localStorage.setItem("home", jsonHome)

            if (rawData.items.tipo_usuario === 'Psicopedagogo') {
                setPacientes(rawData.items.pacientes)
            } else {
                setPacientes(rawData.items.familiares)
            }



        } catch (error) {
            return false
        }

    }

    const returnFoto = () => {

        const json = JSON.parse(localStorage.getItem('home'))

        if (json.items.foto) {
            return json.items.foto
        } else {
            return null
        }

    }

    useEffect(() => {
        requestData()
    }, [])

    return (
        <div className="py-4 px-5 gap-8 flex flex-col h-screen">
            <ContainerHeader foto={returnFoto()} />
            <main
                className="
        gap-2 flex flex-col justify-center items-center grow md:gap-8
        "
            >
                <div className="w-full flex gap-2 items-center justify-center">
                    <InputHome busca={setBusca} />
                    <Filter className="text-(--bg-primary-color) size-8" />
                </div>
                <ContainerPacientes
                    pacientes={
                        pacientesFiltrados.length > 0 ? pacientesFiltrados : pacientes
                    }
                />

                <Button
                    variantClick="basicClick"
                    onClick={() => navigate("/adicionar_paciente")}
                >
                    Adicionar paciente
                </Button>
            </main>
        </div>
    );
}

export default TelaHome;
