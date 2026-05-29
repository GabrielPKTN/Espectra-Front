import InputDefault from "../components/InputDefault"
import antonioPhoto from "../assets/general_photos/antonio_photo.png"
import Button from "../components/Button.jsx"
import HeaderResponsavel from "../components/HeaderResponsavel.jsx"
import { CircleUser, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import api from "../services/api.js"
import { useNavigate } from "react-router-dom"

function TelaCadastroFamiliar() {

    const navigate = useNavigate();

    const [foto, setFoto] = useState(null)
    const [fotoPreview, setFotoPreview] = useState("")

    // VALIDAÇÕES DE CAMPOS.
    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState("")

    const [cpf, setCpf] = useState("")
    const [erroCpf, setErroCpf] = useState("")

    const [diagnostico, setDiagnostico] = useState("")
    const [erroDiagnostico, setErroDiagnostico] = useState("")

    const [idSerieEscolar, setIdSerieEscolar] = useState("")
    const [erroSerieEscolar, setErroSerieEscolar] = useState("")

    const [dataNascimento, setDataNascimento] = useState("")
    const [erroDataNascimento, setErroDataNascimento] = useState("")

    const [idGrauSuporte, setIdGrauSuporte] = useState("")
    const [erroGrauSuporte, setErroGrauSuporte] = useState("")

    const [diagnosticos, setDiagnosticos] = useState([])

    const [loading, setLoading] = useState(false)

    const [usuario, setUsuario] = useState({ nome: '', foto: '' });

    // DIAGNOSTICOS
    useEffect(() => {
        async function buscarDiagnosticos() {
            try {
                const token = localStorage.getItem("token")

                const response = await api.get("/v1/espectra/diagnostico",
                    {
                        headers: {
                            "x-access-token": token
                        }
                    }
                )

                setDiagnosticos(response.data.items || [])
            } catch (error) {
                console.error("Erro ao buscar diagnosticos:", error)
                toast.error("Erro ao carregar diagnósticos")
            }
        }

        buscarDiagnosticos()
    }, [])

    // PEGAR A FOTO E O NOME DO USUÁRIO
    useEffect(() => {
        const idUsuario = localStorage.getItem('id_usuario');
        const token = localStorage.getItem('token');

        if (!idUsuario || !token) return;

        api.get(`/v1/espectra/usuario/${idUsuario}`, {
            headers: { "x-access-token": token }
        })
            .then(response => {
                setUsuario({
                    nome: response.data.items?.nome || "Usuário",
                    foto: response.data.items?.foto
                })
            })
            .catch(error => {
                console.error("Erro usuário:", error);

                if (error.response?.status === 401) {
                    toast.error("Sessão expirada");

                    localStorage.clear();
                    navigate("/login");
                }
            });


        // if (idUsuario && token) {
        //     try {
        //         api.get(`/v1/espectra/usuario/${idUsuario}`, {
        //             headers: { "x-access-token": token }
        //         }).then(response => {
        //             setUsuario({
        //                 nome: response.data.items?.nome || "Usuário",
        //                 foto: response.data.items?.foto
        //             })
        //         })
        //     } catch (error) {
        //         console.error("Erro ao processar dados do usuário", error)
        //     }
        // }
    }, [])

    function validarNome(nome) {
        const nomeLimpo = nome ? nome.trim() : ""
        const regexNomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

        if (nomeLimpo.length === 0) {
            throw new Error("O nome é obrigatório.")
        }

        if (nomeLimpo.length > 150) {
            throw new Error("O nome não pode conter mais que 150 caracteres.")
        }

        if (!regexNomeValido.test(nomeLimpo)) {
            throw new Error("O nome não deve conter números ou caracteres especiais.")
        }

        return nomeLimpo
    }

    function validarCpf(cpf) {
        const cpfTexto = cpf ? cpf.trim() : ""
        const cpfLimpo = cpfTexto.replace(/\D/g, "")
        const regexCaracteresPermitidos = /^[0-9.\-\s]+$/

        if (cpfTexto.length === 0) {
            throw new Error("O CPF é obrigatório")
        }

        if (cpfLimpo.length !== 11) {
            throw new Error("O CPF deve conter exatamente 11 números.")
        }

        if (!regexCaracteresPermitidos.test(cpfTexto)) {
            throw new Error("O CPF deve conter apenas números, pontos e traços. Remova letras ou símbolos como '@'.")
        }

        if (/^(\d)\1{10}$/.test(cpfLimpo)) {
            throw new Error("CPF inválido (números repetidos).")
        }

        return cpfLimpo
    }

    function formatarCpf(valor) {
        return valor
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }

    function validarDiagnostico(diagnostico) {
        if (!diagnostico) {
            throw new Error("O diagnóstico é obrigatório!")
        }

        return diagnostico
    }

    function validarSerieEscolar(serieEscolar) {
        if (!serieEscolar) {
            throw new Error("A série escolar é obrigatória!")
        }

        return serieEscolar
    }

    function validarGrauSuporte(grauSuporte) {
        if (!grauSuporte) {
            throw new Error("O grau de suporte é obrigatório!")
        }

        return grauSuporte
    }

    function validarDataNascimento(data) {
        const dataTexto = data ? data.trim() : ""
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/
        const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if (dataTexto.length === 0) {
            throw new Error("A data de nascimento é obrigatória")
        }

        if (!regexData.test(dataTexto)) {
            throw new Error("A data deve estar no formato DD/MM/AAAA.")
        }

        const partes = dataTexto.split("/")
        const dia = parseInt(partes[0], 10)
        const mes = parseInt(partes[1], 10)
        const ano = parseInt(partes[2], 10)

        if (mes < 1 || mes > 12) {
            throw new Error("Mês inválido.")
        }

        const anoBissexto = (ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0)
        if (anoBissexto) {
            diasPorMes[1] = 29
        }

        if (dia < 1 || dia > diasPorMes[mes - 1]) {
            throw new Error(`O mês inserido não possui o dia ${dia}`);
        }

        return dataTexto
    }

    function formatarData(valor) {
        return valor
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1")

    }

    function dataFormatadaApi(data) {
        const [dia, mes, ano] = data.split("/")
        return `${ano}-${mes}-${dia}`
    }

    async function cadastrarFamiliar() {

        try {
            setLoading(true);

            setErroNome("");
            setErroCpf("");
            setErroDiagnostico("");
            setErroSerieEscolar("");
            setErroDataNascimento("");
            setErroGrauSuporte("");

            const token = localStorage.getItem("token")

            if (!token) {
                toast.error("Sua sessão foi expirada, faça login novamente!")
                navigate("/login")
                return
            }

            const nomeValidado = validarNome(nome);
            const cpfValidado = validarCpf(cpf);
            const diagnosticoValidado = validarDiagnostico(diagnostico);
            const serieEscolarValidada = validarSerieEscolar(idSerieEscolar)
            const dataNascimentoValidada = validarDataNascimento(dataNascimento)
            const grauSuporteValidada = validarGrauSuporte(idGrauSuporte)
            const idUsuario = localStorage.getItem("id_usuario")

            const dataFormatada = dataFormatadaApi(dataNascimentoValidada);
            const formData = new FormData();

            formData.append("nome", nomeValidado)
            formData.append("cpf", cpfValidado)
            formData.append("diagnostico", JSON.stringify([{ id: Number(diagnostico) }]))
            formData.append("data_nascimento", dataFormatada)
            formData.append("id_serie_escolar", serieEscolarValidada)
            formData.append("id_grau_suporte", grauSuporteValidada)
            formData.append("id_responsavel", idUsuario)


            if (foto) {
                formData.append("foto", foto)
            }

            console.log("Enviando dados...")

            await api.post(`/v1/espectra/paciente/`, formData,
                {
                    headers: {
                        "x-access-token": token,
                        "Content-Type": "multipart/form-data"
                    }
                });

            toast.success("Paciente cadastrado com sucesso!")
            navigate("/home")


        } catch (error) {
            console.error(error);

            if (error.response) {
                toast.error(error.response.data.message || "Erro ao cadastrar paciente!")
            } else if (error.message) {
                const mensagem = error.message

                if (mensagem.includes("nome")) setErroNome(mensagem);
                else if (mensagem.includes("CPF")) setErroCpf(mensagem);
                else if (mensagem.includes("diagnóstico")) setErroDiagnostico(mensagem);
                else if (mensagem.includes("série")) setErroSerieEscolar(mensagem);
                else if (mensagem.includes("nascimento") || mensagem.includes("Mês") || mensagem.includes("inserido")) setErroDataNascimento(mensagem);
                else if (mensagem.includes("suporte")) setErroGrauSuporte(mensagem);
                else toast.error(mensagem);
            } else {
                toast.error("Erro ao conectar ao servidor!")
            }
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="flex flex-col h-screen w-full gap-5">

            <HeaderResponsavel
                nome={usuario.nome}
                foto={usuario.foto}
            />

            <div className="flex flex-col items-center gap-10 lg:gap-0 lg:mt-8">
                <label className="cursor-pointer">

                    {
                        fotoPreview ? (
                            <img
                                src={fotoPreview}
                                alt="Foto do paciente"
                                className="size-38 md:size-36 rounded-full object-cover border-4 border-[#4285F4]"
                            />
                        ) : (


                            <div className="relative cursor-pointer">

                                <CircleUser
                                    id="preview-image"
                                    alt="Foto do psicopedagogo"
                                    className=" w-auto h-32 bg-white text-(--bg-primary-color) rounded-full object-cover md:size-36"
                                />

                                <Plus
                                    className="absolute bottom-1 right-1.5 w-auto h-8 bg-[#3277CF] border-2 border-white rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-110 md:size-10 lg:right-2.5"
                                    color="#FFFFFF"
                                />

                            </div>


                        )
                    }

                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const arquivo = e.target.files[0]

                            if (arquivo) {
                                setFoto(arquivo)
                                setFotoPreview(URL.createObjectURL(arquivo))
                            }
                        }}
                    />

                </label>

                <div className="flex flex-col gap-2 px-10">

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-(--dark-blue)">Nome</span>
                        <InputDefault
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value)
                                setErroNome("")
                            }}
                            variantInput={erroNome ? "errorInput" : "basicInput"}
                        />                            {
                            erroNome && (
                                <p className="text-red-500">
                                    {erroNome}
                                </p>
                            )}
                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-(--dark-blue)">CPF</span>
                        <InputDefault
                            value={cpf}
                            onChange={(e) => {
                                const cpfFormatado = formatarCpf(e.target.value)

                                setCpf(cpfFormatado)
                                setErroCpf("")
                            }}
                            variantInput={erroCpf ? "errorInput" : "basicInput"}
                        />
                        {
                            erroCpf && (
                                <p className="text-red-500">
                                    {erroCpf}
                                </p>
                            )
                        }
                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-(--dark-blue)">Diagnóstico</span>
                        <select
                            value={diagnostico}
                            onChange={(e) => {
                                setDiagnostico(e.target.value)
                                setErroDiagnostico("")
                            }}
                            className={`border rounded-xl h-12 lg:h-10 w-full ${erroDiagnostico
                                ? "border-red-500"
                                : "border-(--bg-primary-color)"
                                }`}
                        >
                            <option value="">
                                Selecione
                            </option>
                            {
                                diagnosticos.map((diag) => (
                                    <option
                                        key={diag.id}
                                        value={diag.id}>
                                        {diag.nome_completo_transtorno}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2 w-full">

                        <div className="flex flex-col">

                            <span className="inclusive-sans text-xl font-semibold text-(--dark-blue)">Série escolar</span>

                            <select
                                name=""
                                id=""
                                value={idSerieEscolar}
                                onChange={(e) => {
                                    setIdSerieEscolar(e.target.value)
                                    setErroSerieEscolar("")
                                }}

                                className={`border rounded-xl h-12 lg:h-10 w-full ${erroSerieEscolar ? "border-red-500" : "border-[var(--bg-primary-color)]"}`}
                            >
                                <option value="">
                                    Selecione
                                </option>

                                <option value="1">
                                    MATERNAL
                                </option>

                                <option value="2">
                                    JARDIM I
                                </option>

                                <option value="3">
                                    JARDIM II
                                </option>

                                <option value="4">
                                    1º ANO
                                </option>

                                <option value="5">
                                    2º ANO
                                </option>

                                <option value="6">
                                    3º ANO
                                </option>

                                <option value="7">
                                    4º ANO
                                </option>

                                <option value="8">
                                    5º ANO
                                </option>

                                <option value="9">
                                    6º ANO
                                </option>

                                <option value="10">
                                    7º ANO
                                </option>

                                <option value="11">
                                    8º ANO
                                </option>

                                <option value="12">
                                    9º ANO
                                </option>

                                <option value="13">
                                    1º MÉDIO
                                </option>

                                <option value="14">
                                    2º MÉDIO
                                </option>

                                <option value="15">
                                    3º MÉDIO
                                </option>

                                <option value="16">
                                    CONCLUIDO
                                </option>
                            </select>
                            {
                                erroSerieEscolar && (
                                    <p className="text-red-500">
                                        {erroSerieEscolar}
                                    </p>
                                )
                            }
                        </div>

                        <div className="flex flex-col">

                            <span className="inclusive-sans text-xl font-semibold text-(--dark-blue)">Nascimento</span>

                            <InputDefault
                                value={dataNascimento}
                                onChange={(e) => {
                                    const dataFormatada = formatarData(e.target.value)

                                    setDataNascimento(dataFormatada)
                                    setErroDataNascimento("")
                                }}
                                variantInput={erroDataNascimento ? "errorInput" : "basicInput"}
                                placeholder={"DD/MM/AAAA"}
                                className="text-center h-12 lg:h-10"
                            />
                            {
                                erroDataNascimento && (
                                    <p className="text-red-500">
                                        {erroDataNascimento}
                                    </p>
                                )
                            }
                        </div>

                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-(--dark-blue)">Grau suporte</span>
                        <select
                            name=""
                            id=""
                            value={idGrauSuporte}
                            onChange={(e) => {
                                setIdGrauSuporte(e.target.value)
                                setErroGrauSuporte("")
                            }}
                            className={`border rounded-xl h-12 lg:h-10 w-full ${erroGrauSuporte ? "border-red-500" : "border-(--bg-primary-color)"}`}
                        >
                            <option value="">
                                Selecione
                            </option>

                            <option value="1">
                                GRAU 1
                            </option>

                            <option value="2">
                                GRAU 2
                            </option>

                            <option value="3">
                                GRAU 3
                            </option>
                        </select>
                        {
                            erroGrauSuporte && (
                                <p className="text-red-500">
                                    {erroGrauSuporte}
                                </p>
                            )
                        }
                    </div>

                </div>


                <div className="flex self-center md:gap-10 md:flex md:flex-row-reverse lg:mt-10 lg:mb-10">
                    {/* onClick -> voltar para a tela home do fluxo de familiar */}
                    <Button
                        type="button"
                        onClick={cadastrarFamiliar}
                        disabled={loading}
                    >
                        {loading ? "Salvando..." : "Salvar"}
                    </Button>
                    <Button
                        onClick={() => navigate(-1)}
                        className="hidden md:block md:text-(--bg-primary-color) bg-white md:instrument-sans md:text-xl md:w-48 md:h-12 md:rounded-lg md:font-bold md:shadow-2xl hover:bg-gray-100 ">
                        Cancelar
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default TelaCadastroFamiliar