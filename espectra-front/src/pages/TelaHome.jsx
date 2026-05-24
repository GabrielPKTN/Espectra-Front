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
    const [grauSuporte, setGrauSuporte] = useState("");
    const [menuAberto, setMenuAberto] = useState(false);


    const pacientesFiltrados = Array.isArray(pacientes) ? pacientes.filter((paciente) => {
        // Busca por nome
        const confereNome = paciente?.nome?.toLowerCase().includes(busca.toLowerCase());

        const confereGrau = grauSuporte === "" ||
            (paciente?.grau_suporte && String(paciente.grau_suporte).includes(grauSuporte));

        return confereNome && confereGrau;
    }) : [];
    const requestData = async () => {

        const id_usuario = localStorage.getItem("id_usuario")

        try {

            const result = await app.get(`/v1/espectra/usuario/home/${id_usuario}`,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                }
            )

            let rawData = result.data

            localStorage.setItem("tipo_usuario", rawData.items.tipo_usuario)

            let pacientesDados = rawData.items.pacientes || []

            if (Array.isArray(pacientesDados)) {

                rawData.items.pacientes = pacientesDados.map(paciente => ({
                    ...paciente, diagnostico_breve: (paciente.diagnostico_breve || []).map(
                        diag => diag.sigla
                    ).join(" ")
                }))

            }

            const jsonHome = JSON.stringify(rawData)
            localStorage.setItem("home", jsonHome)

            if (rawData.items.tipo_usuario === 'Psicopedagogo') {
                setPacientes(rawData.items.pacientes || [])
                console.log("MEUS PACIENTES NO FRONT:", rawData.items.pacientes);
            } else {
                setPacientes(rawData.items.familiares || [])
            }

        } catch (error) {
            console.error("Erro ao buscar dados da Home:", error);
            return false
        }

    }

    const homeDataString = localStorage.getItem('home');
    const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;

    const fotoUsuario = homeDataObject?.items?.foto || null;
    const idUsuario = homeDataObject?.items?.id || null;

    const tipoUsuarioAtual = localStorage.getItem("tipo_usuario") || "";

    useEffect(() => {
        requestData()
    }, [])

    return (
        <div className="py-4 px-5 gap-8 flex flex-col h-screen">
            <ContainerHeader foto={fotoUsuario} id={idUsuario} />
            <main
                className="
        gap-2 flex flex-col justify-center items-center grow md:gap-8
        "
            >
                <div className="w-full flex gap-2 items-center justify-center">
                    <InputHome busca={setBusca} tipoUsuario={tipoUsuarioAtual} />
                    {/* Container do Filtro */}
                    <div className="relative cursor-pointer">


                        <button
                            type="button"
                            onClick={() => setMenuAberto(!menuAberto)}
                            className={`p-1 rounded-xl hover:bg-gray-100 transition-all focus:outline-none flex items-center justify-center ${grauSuporte ? 'bg-green-50 text-green-600' : 'text-(--bg-primary-color)'
                                }`}
                            title="Filtrar por Grau de Suporte"
                        >

                            <Filter className="size-8" />
                        </button>

                        {menuAberto && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setMenuAberto(false)}
                                />

                                <div className="absolute right-0 mt-2 w-56 bg-white border-2 border-gray-100 rounded-2xl shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <p className="px-4 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider font-inclusive-sans">
                                        Grau de Suporte
                                    </p>

                                    <hr className="my-1 border-gray-100" />

                                    <button
                                        onClick={() => { setGrauSuporte(""); setMenuAberto(false); }}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-inclusive-sans transition-colors ${grauSuporte === ""
                                            ? "bg-(--bg-primary-color) text-white font-semibold"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        Todos os graus
                                    </button>

                                    <button
                                        onClick={() => { setGrauSuporte("1"); setMenuAberto(false); }}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-inclusive-sans transition-colors cursor-pointer ${grauSuporte === "1"
                                            ? "bg-(--bg-primary-color) text-white font-semibold"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        Grau de Suporte 1
                                    </button>

                                    <button
                                        onClick={() => { setGrauSuporte("2"); setMenuAberto(false); }}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-inclusive-sans transition-colors cursor-pointer ${grauSuporte === "2"
                                            ? "bg-(--bg-primary-color) text-white font-semibold"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        Grau de Suporte 2
                                    </button>

                                    <button
                                        onClick={() => { setGrauSuporte("3"); setMenuAberto(false); }}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-inclusive-sans transition-colors cursor-pointer ${grauSuporte === "3"
                                            ? "bg-(--bg-primary-color) text-white font-semibold"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        Grau de Suporte 3
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <ContainerPacientes
                    pacientes={pacientesFiltrados}
                    tipoUsuario={tipoUsuarioAtual}
                />

                <Button
                    variantClick="basicClick"
                    onClick={() => {
                        if (tipoUsuarioAtual === "Psicopedagogo") {
                            navigate("/adicionar-paciente");
                        } else {
                            navigate("/cadastro-familiar");
                        }
                    }}
                    className="lg:text-center lg:w-64 lg:h-14"
                >
                    {localStorage.getItem("tipo_usuario") === "Psicopedagogo"
                        ? "Adicionar paciente"
                        : "Adicionar familiar"}
                </Button>
            </main>
        </div>
    );
}

export default TelaHome;
