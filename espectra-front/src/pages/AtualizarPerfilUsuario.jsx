import Logotipo from "../components/logotipo.jsx";
import BotaoVoltar from "../components/BotaoVoltar.jsx";
import InputDefault from "../components/InputDefault";
import Button from "../components/Button";
import { ChevronLeft, CircleUser } from "lucide-react"; // nao usaremos mais. Componentizado => lembrar de remover
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import api from "../services/api.js"

function AtualizarPerfilUsuario() {

    const navigate = useNavigate()

    const { id_usuario } = useParams()

    const [usuario, setUsuario] = useState([])

    const [foto, setFoto] = useState("")
    const [arquivoFoto, setArquivoFoto] = useState(null)

    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState("")

    const [email, setEmail] = useState("")
    const [erroEmail, setErroEmail] = useState("")

    const [telefone, setTelefone] = useState("")
    const [erroTelefone, setErroTelefone] = useState("")

    const [nascimento, setNascimento] = useState("")
    const [erroNascimento, setErroNascimento] = useState("")

    const requestData = async () => {

        try {

            const url = `/v1/espectra/usuario/${id_usuario}`

            const configHeader = {

                headers: {
                    'x-access-token': localStorage.getItem('token')
                }

            }

            const result = await api.get(url, configHeader)

            let reqUsuario = [result.data.items]

            setUsuario(reqUsuario)

        } catch (error) {
            return false
        }

    }

    const updateUsuario = async () => {

        try {

            const url = `/v1/espectra/usuario/${id_usuario}`

            const configHeader = {

                headers: {

                    'x-access-token': localStorage.getItem('token'),
                    'Content-Type': 'MULTIPART/FORM-DATA'

                }

            }

            const formData = new FormData()

            let dataFormatada = nascimento.split("/")
            dataFormatada = `${dataFormatada[2]}-${dataFormatada[1]}-${dataFormatada[0]}`

            if (arquivoFoto) {
                formData.append('foto', arquivoFoto)
            }

            formData.append('nome', nome)
            formData.append('email', email)
            formData.append('data_nascimento', dataFormatada)
            formData.append('telefone', telefone)

            const result = await api.put(url, formData, configHeader)

            navigate(`/perfil/${id_usuario}`)

        } catch (error) {
            return false
        }

    }

    useEffect(() => {
        requestData()
    }, [])

    useEffect(() => {

        setNome(usuario[0]?.nome || "")
        setEmail(usuario[0]?.email || "")
        setTelefone(usuario[0]?.telefone || "")

        let data;

        if (usuario[0]?.data_nascimento) {

            data = usuario[0].data_nascimento.split("-")
            data = `${data[2]}/${data[1]}/${data[0]}`

        }

        setNascimento(data || "")
        setFoto(usuario[0]?.foto || "")

    }, [usuario])

    function alteracoesSalvas() {
        alert("Suas alterações foram salvas com sucesso!")

        navigate("/")
    }

    function validarNome(e) {
        const valorInserido = e.target.value

        setNome(valorInserido)

        const nomeLimpo = valorInserido.trim()

        if (!nomeLimpo) {
            setErroNome("Seu nome não pode estar vazio!")
            return
        }

        if (/\d/.test(nomeLimpo)) {
            setErroNome("O nome não pode conter números!")
            return
        }

        if (/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/.test(nomeLimpo)) {
            setErroNome("O nome não pode conter caracteres especiais!")
            return
        }

        setErroNome("")
    }

    function validarEmail(e) {
        const valorInserido = e.target.value

        setEmail(valorInserido)

        const emailLimpo = valorInserido.trim()

        if (!emailLimpo) {
            setErroEmail("Seu email não pode estar vazio")
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailValido.test(emailLimpo)) {
            setErroEmail("Digite um email válido!")
            return
        }

        setErroEmail("");
    }

    function mascaraTelefone(e) {
        let formato = e.target.value.replace(/\D/g, "");

        if (formato.length <= 10) {
            formato = formato.replace(/^(\d{2})(\d)/g, "($1) $2");
            formato = formato.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            formato = formato.replace(/^(\d{2})(\d)/g, "($1) $2");
            formato = formato.replace(/(\d{5})(\d)/, "$1-$2");
        }

        return formato;
    }

    function validarNumeroTelefone(e) {

        const mascaraUI = mascaraTelefone(e);

        const telefoneInserido = e.target.value.replace(/\D/g, "");
        const formatoTelefone = /^[1-9]{2}(?:[1-8]|9)[0-9]{7,8}$/;

        setTelefone(mascaraUI)

        if (telefoneInserido.trim() === "") {
            setErroTelefone("Informe seu número de telefone");
        } else if (!formatoTelefone.test(telefoneInserido)) {
            setErroTelefone("Digite um número válido!");
        } else {
            setErroTelefone("");
        }
    }

    function mascaraDataNascimento(e) {
        const valorInserido = e.target.value

        let dataLimpa = valorInserido.replace(/\D/g, "")

        dataLimpa = dataLimpa.replace(/^(\d{2})(\d)/, "$1/$2")
        dataLimpa = dataLimpa.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")

        return dataLimpa
    }

    function validarDataNascimento(e) {
        const dataComMascara = mascaraDataNascimento(e)

        setNascimento(dataComMascara)

        const dataLimpa = dataComMascara.replace(/\D/g, "")

        if (!dataLimpa) {
            setErroNascimento("Informe sua data de nascimento!")
            return
        }

        if (dataLimpa.length < 8) {
            setErroNascimento("Digite uma data válida!")
            return
        }

        const dia = parseInt(dataLimpa.substring(0, 2))
        const mes = parseInt(dataLimpa.substring(2, 4))
        const ano = parseInt(dataLimpa.substring(4, 8))

        const dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear()

        if (dia < 1 || dia > 31) {
            setErroNascimento("Dia Inválido")
            return
        }

        if (mes < 1 || mes > 12) {
            setErroNascimento("Mês inválido!")
            return
        }

        if (ano < 1900 || ano > anoAtual) {
            setErroNascimento("Ano inválido!")
            return
        }

        const dataValida = new Date(ano, mes - 1, dia)

        if (
            dataValida.getDate() !== dia ||
            dataValida.getMonth() !== mes - 1 ||
            dataValida.getFullYear() !== ano
        ) {
            setErroNascimento("Data inválida!")
            return
        }

        setErroNascimento("")
    }

    function preview({ target }) {

        if (!target.files || target.files.length === 0) return

        let rawPic = target.files[0]
        setArquivoFoto(rawPic)

        setFoto(`${URL.createObjectURL(target.files[0])}`)


    }

    function clickInput() {
        document.getElementById('preview-input').click()
    }

    return (
        <>
            {/* Div do Header */}
            <div
                className="flex justify-between items-center h-32.5 md:h-40 lg:h-36.5 px-4 bg-[#3277CF]"
            >
                <BotaoVoltar
                    onClick={() => navigate(-1)}
                    color="whiteColor"
                />

            </div>

            {/* Div da foto do psicopedagogo */}
            <div className="flex justify-center -mt-18 z-5 relative md:-mt-22 lg:-mt-24">

                {(foto || usuario[0]?.foto) ? (

                    <div className="relative">

                        <img
                            id="preview-image"
                            src={foto || usuario[0]?.foto}
                            alt="Foto do psicopedagogo"
                            className="w-auto h-32  border-[#3277CF] border-4 rounded-full object-cover md:w-auto md:h-42 lg:w-auto lg:h-45"
                        />

                        <input id="preview-input" onChange={preview} className="w-0" type="file" accept="image/*"></input>

                        <Plus
                            className="absolute bottom-2 right-2 w-auto h-32  bg-[#3277CF] rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-110  md:w-auto md:h-12 lg:w-auto lg:h-11"
                            color="#FFFFFF"
                            onClick={() => clickInput()}
                        />

                    </div>

                ) : (

                    <div className="relative">

                        <CircleUser
                            id="preview-image"
                            alt="Foto do psicopedagogo"
                            className=" w-auto h-32 bg-white text-(--bg-primary-color) rounded-full object-cover md:w-auto md:h-42 lg:w-auto lg:h-45"
                        />

                        <input id="preview-input" onChange={preview} className="w-0" type="file" accept="image/*"></input>

                        <Plus
                            className="absolute bottom-5 right-2 w-auto h-8 bg-[#3277CF] border-2 border-white rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-110 md:w-auto md:h-12 lg:w-auto lg:h-11"
                            color="#FFFFFF"
                            onClick={() => clickInput()}
                        />

                    </div>
                )}


            </div>

            {/* Div que guarda os inputs do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full md:mt-14 lg:mt-4">
                <div className="flex flex-col gap-2">
                    <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                        Nome
                    </label>

                    <InputDefault
                        type="text"
                        variantInput={erroNome ? "errorInput" : "basicInput"}
                        value={nome}
                        onChange={validarNome}
                        className=""
                    />
                    {
                        erroNome && (
                            <span className="text-red-500 text-sm">
                                {erroNome}
                            </span>
                        )
                    }

                    <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                        Email
                    </label>

                    <InputDefault
                        type="text"
                        variantInput={erroEmail ? "errorInput" : "basicInput"}
                        value={email}
                        onChange={validarEmail}
                        className="!w-[300px] md:!w-[500px] lg:!w-[550px]"
                    />
                    {
                        erroEmail && (
                            <span className="text-red-500 text-sm">
                                {erroEmail}
                            </span>
                        )
                    }
                </div>

                <div className="flex flex-row gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                            Telefone
                        </label>

                        <InputDefault
                            type="text"
                            variantInput={erroTelefone ? "errorInput" : "basicInput"}
                            value={telefone}
                            onChange={validarNumeroTelefone}
                            className="!w-[140px] md:!w-[240px] lg:!w-[265px]"
                        />
                        {
                            erroTelefone && (
                                <span className="text-red-500 text-sm">
                                    {erroTelefone}
                                </span>
                            )
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                            Nascimento
                        </label>

                        <InputDefault
                            type="text"
                            variantInput={erroNascimento ? "errorInput" : "basicInput"}
                            placeholder="DD/MM/AAAA"
                            value={nascimento}
                            onChange={validarDataNascimento}
                            limiteCaracteres={10}
                            className="!w-[140px] md:!w-[240px] lg:!w-[265px]"
                        />
                        {
                            erroNascimento && (
                                <span className="text-red-500 text-sm">
                                    {erroNascimento}
                                </span>
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 md:mt-15 lg:flex-row lg:gap-6">
                    <Button
                        variantClick="editButton"
                        className="text-[#3277CF] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110 md:w-[300px]"
                        onClick=""// Navigate para a tela de redefinir senha 
                    >
                        Editar senha
                    </Button>

                    <Button
                        variantClick="editButton"
                        className="text-[#3277CF] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110 md:w-[300px]"
                        onClick={() => updateUsuario()}
                    >
                        Salvar alterações
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AtualizarPerfilUsuario;