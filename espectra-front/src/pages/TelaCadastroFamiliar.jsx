import InputDefault from "../components/InputDefault"
import antonioPhoto from "../assets/general_photos/antonio_photo.png"
import Button from "../components/Button.jsx"
import HeaderResponsavel from "../components/HeaderResponsavel.jsx"
import { CircleUser } from "lucide-react"
import { useState } from "react"
import axios from "axios"


function TelaCadastroFamiliar() {
    const [foto, setFoto] = useState(null)
    const [fotoPreview, setFotoPreview] = useState("")

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

    const [loading, setLoading] = useState(false)

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
            setLoading(true)

            //const token = localStorage.getItem("token")
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTI4MjM1NywiZXhwIjoxMDAwMDE3NzkyODIzNTd9.Gg83eaBKGXg2Xa9tNm5rjAxXn9_8mJxj4w2GBG756yk"

            let nomeValidado = ""
            let cpfValidado = ""
            let diagnosticoValidado = ""
            let serieEscolarValidada = ""
            let dataNascimentoValidado = ""
            let grauSuporteValidada = ""

            try {
                nomeValidado = validarNome(nome)
                setErroNome("")
            } catch (error) {
                setErroNome(error.message)
            }

            try {
                cpfValidado = validarCpf(cpf)
                setErroCpf("")
            } catch (error) {
                setErroCpf(error.message)
            }

            try {
                diagnosticoValidado = validarDiagnostico(diagnostico)
                setErroDiagnostico("")
            } catch (error) {
                setErroDiagnostico(error.message)
            }

            try {
                serieEscolarValidada = validarSerieEscolar(idSerieEscolar)
                setErroSerieEscolar("")
            } catch (error) {
                setErroSerieEscolar(error.message)
            }

            try {
                dataNascimentoValidado = validarDataNascimento(dataNascimento)
                setErroDataNascimento("")
            } catch (error) {
                setErroDataNascimento(error.message)
            }

            try {
                grauSuporteValidada = validarGrauSuporte(idGrauSuporte)
                setErroGrauSuporte("")
            } catch (error) {
                setErroGrauSuporte(error.message)
            }

            if (
                !nomeValidado ||
                !cpfValidado ||
                !diagnosticoValidado ||
                !serieEscolarValidada ||
                !dataNascimentoValidado ||
                !grauSuporteValidada
            ) {
                return
            }

            const dataFormatada = dataFormatadaApi(dataNascimentoValidado)

            const formData = new FormData()


            formData.append("nome", nomeValidado)
            formData.append("cpf", cpfValidado)
            formData.append("diagnostico", JSON.stringify([{ id: Number(diagnostico) }]))
            formData.append("data_nascimento", dataFormatada)
            formData.append("id_serie_escolar", serieEscolarValidada)
            formData.append("id_grau_suporte", grauSuporteValidada)

            //Adicionar o id do Responsável guardado no local storage.
            formData.append("id_responsavel", 2)

            if (foto) {
                formData.append("foto", foto)
            }

            console.log("Enviando dados...")

            await axios.post(`http://localhost:8080/v1/espectra/paciente/`,
                formData,

                {
                    headers: {
                        "x-access-token": token,
                        "Content-Type": "multipart/form-data"
                    }
                })

            alert("Paciente cadastrado com sucesso!")

        } catch (error) {
            console.log(error)

            if (error.response) {
                console.log(error.response.data)
                alert(error.response.data.message || "Erro ao cadastrar paciente!")
            } else {
                alert("Erro ao conectar com o servidor!")
            }


        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-screen w-full gap-5">

            <HeaderResponsavel
                nome="Antônio"
                foto={antonioPhoto}
            />

            <div className="flex flex-col items-center gap-10 lg:gap-0 lg:mt-8">
                <label className="cursor-pointer">

                    {
                        fotoPreview ? (
                            <img
                                src={fotoPreview}
                                alt="Foto do paciente"
                                className="w-[223px] h-[200px] md:h-[170px] md:w-[170px] rounded-full object-cover border-4 border-[#4285F4]"
                            />
                        ) : (
                            <CircleUser
                                className="w-[223px] h-[200px] md:h-[170px] md:w-[170px]"
                                color="#4285F4"
                            />
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
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nome</span>
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
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">CPF</span>
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
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Diagnóstico</span>
                        <select
                            value={diagnostico}
                            onChange={(e) => {
                                setDiagnostico(e.target.value)
                                setErroDiagnostico("")
                            }}
                            className={`border rounded-lg h-12 w-full ${erroDiagnostico
                                ? "border-red-500"
                                : "border-[var(--bg-primary-color)]"
                                }`}
                        >
                            <option value="">Selecione</option>
                            <option value="1">TDAH</option>
                            <option value="2">TEA</option>
                            <option value="3">TAG</option>
                            <option value="4">TAB</option>
                            <option value="5">TOC</option>
                            <option value="6">TEPT</option>
                            <option value="7">TPL</option>
                            <option value="8">TOD</option>
                            <option value="9">TDC</option>
                            <option value="10">TCA</option>
                            <option value="11">TDA</option>
                            <option value="12">TPAS</option>
                            <option value="13">TPN</option>
                            <option value="14">TPE</option>
                            <option value="15">TP Esquizo</option>
                            <option value="16">TPE-Evit</option>
                            <option value="17">TPD</option>
                            <option value="18">TP Histri</option>
                            <option value="19">T Pânico</option>
                            <option value="20">TAS</option>
                            <option value="21">Fob. Esp.</option>
                            <option value="22">Agorafob</option>
                            <option value="23">T. Depr. M</option>
                            <option value="24">Distimia</option>
                            <option value="25">T. Somat</option>
                            <option value="26">T. Convers</option>
                            <option value="27">T. Factíc</option>
                            <option value="28">Anorexia</option>
                            <option value="29">Bulimia</option>
                            <option value="30">Insônia</option>
                            <option value="31">Hipersônia</option>
                            <option value="32">Narcolep</option>
                            <option value="33">Apneia</option>
                            <option value="34">Dislexia</option>
                            <option value="35">Discalc</option>
                            <option value="36">Tiques</option>
                            <option value="37">Tourette</option>
                            <option value="38">Esquizof</option>
                            <option value="39">T. Esquizoa</option>
                            <option value="40">T. Delir</option>
                        </select>
                    </div>

                    <div className="flex gap-2">

                        <div className="flex flex-col items-start w-[50%]">

                            <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Série escolar</span>

                            <select
                                name=""
                                id=""
                                value={idSerieEscolar}
                                onChange={(e) => {
                                    setIdSerieEscolar(e.target.value)
                                    setErroSerieEscolar("")
                                }}

                                className={`border rounded-lg h-12 w-full ${erroSerieEscolar ? "border-red-500" : "border-[var(--bg-primary-color)]"}`}
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

                        <div className="w-[50%]">

                            <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nascimento</span>

                            <InputDefault
                                value={dataNascimento}
                                onChange={(e) => {
                                    const dataFormatada = formatarData(e.target.value)

                                    setDataNascimento(dataFormatada)
                                    setErroDataNascimento("")
                                }}
                                variantInput={erroDataNascimento ? "errorInput" : "basicInput"}
                                placeholder={"DD/MM/AAAA"}
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
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Grau suporte</span>
                        <select
                            name=""
                            id=""
                            value={idGrauSuporte}
                            onChange={(e) => {
                                setIdGrauSuporte(e.target.value)
                                setErroGrauSuporte("")
                            }}
                            className={`border rounded-lg h-12 w-full ${erroGrauSuporte ? "border-red-500" : "border-[var(--bg-primary-color)]"}`}
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
                    <Button className="hidden md:block md:text-[var(--bg-primary-color)] bg-white md:instrument-sans md:text-xl md:w-48 md:h-12 md:rounded-lg md:font-bold md:shadow-2xl">Cancelar</Button>
                </div>

            </div>

        </div>
    )
}

export default TelaCadastroFamiliar