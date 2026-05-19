import InputHome from "../components/input/InputHome.jsx";
import ContainerHeader from "../components/ContainerHeader";
import ContainerPacientes from "../components/ContainerPacientes.jsx";
import Button from "../components/Button.jsx";
import app from "../services/api.js"
import { Filter } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TelaHome() {

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState([]);
    const [busca, setBusca] = useState("");

    const pacientesFiltrados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(busca.toLowerCase()),
    );

    const requestData = async () => {

        const usuarioStringObject = localStorage.getItem("usuario")
        const usuarioObject       = JSON.parse(usuarioStringObject)

        try {

            const result = await app.get(`/v1/espectra/usuario/home/${usuarioObject.id}`,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )

            let rawData = result.data

            let pacientes = rawData.items.pacientes || []

            if(Array.isArray(pacientes)) {

                rawData.items.pacientes = pacientes.map(paciente => ({
                    ...paciente, diagnostico_breve: (paciente.diagnostico_breve || []).map(
                        diag => diag.sigla
                    ).join(" ")
                }))

            }

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

        const jsonString = localStorage.getItem('home')
        const jsonObject = JSON.parse(jsonString)
        
        if (jsonObject.items.foto) {
            return jsonObject.items.foto
        } else {
            return null
        }

    }

    const returnUsuarioId = () => {

        const jsonString = localStorage.getItem('home')
        const jsonObject = JSON.parse(jsonString)
        
        if (jsonObject.items.id) {
            return jsonObject.items.id
        } else {
            return null
        }

    }

    useEffect(async () => {
        await requestData()
    }, [])

    return (
        <div className="py-4 px-5 gap-8 flex flex-col h-screen">
            <ContainerHeader foto={returnFoto()} id={returnUsuarioId()} />
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
                    onClick={() => navigate("/adicionar-paciente")}
                >
                    Adicionar paciente
                </Button>
            </main>
        </div>
    );
}

export default TelaHome;
