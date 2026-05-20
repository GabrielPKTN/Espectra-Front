import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import InputDefault from "../components/InputDefault";
import Button from "../components/Button";
import { ChevronLeft } from "lucide-react";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

function AtualizarPerfilPsicopedagogo() {

    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState("")

    const [email, setEmail] = useState("")
    const [erroEmail, setErroEmail] = useState("")

    const [telefone, setTelefone] = useState("")
    const [erroTelefone, setErroTelefone] = useState("")

    const [nascimento, setNascimento] = useState("")
    const [erroNascimento, setErroNascimento] = useState("")

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
    }

    function mascaraTelefone(e) {
        const valorInserido = e.target.value

        let telefoneLimpo = valorInserido.replace(/\D/g, "")

        if (telefoneLimpo.length <= 10) {
            telefoneLimpo = telefoneLimpo.replace(/ˆ(\d{2})(\d)/g, "($1) $2")
            telefoneLimpo = telefoneLimpo.replace(/(\d{2})(\d)/g, "($1) $2")
        } else {
            telefoneLimpo = telefoneLimpo.replace(/^(\d{2})(\d)/g, "($1) $2");
            telefoneLimpo = telefoneLimpo.replace(/(\d{5})(\d)/, "$1-$2")
        }

        return telefoneLimpo
    }

    function validarNumeroTelefone(e) {
        const telefoneComMascara = mascaraTelefone(e)

        setTelefone(telefoneComMascara)

        const telefoneLimpo = telefoneComMascara.replace(/\D/g, "")

        if (!telefoneLimpo) {
            setErroTelefone("Informe o seu número de telefone!")
            return
        }

        const formatoTelefone = /^[1-9]{2}(?:[1-8]|9)[0-9]{7,8}$/

        if (!formatoTelefone.test(telefoneLimpo)) {
            setErroTelefone("Digite um número válido!")
            return
        }

        setErroTelefone("")
    }

    function mascaraDataNascimento(e){
        const valorInserido = e.target.value

        let dataLimpa = valorInserido.replace(/\D/g, "")

        dataLimpa = dataLimpa.replace(/^(\d{2})(\d)/, "$1/$2")
        dataLimpa = dataLimpa.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")

        return dataLimpa
    }

    function validarDataNascimento(e){
        const dataComMascara = mascaraDataNascimento(e)

        setNascimento(dataComMascara)

        const dataLimpa = dataComMascara.replace(/\D/g, "")

        if(!dataLimpa){
            setErroNascimento("Informe sua data de nascimento!")
            return
        }

        if(dataLimpa.length < 8){
            setErroNascimento("Digite uma data válida!")
            return
        }

        const dia = parseInt(dataLimpa.substring(0,2))
        const mes = parseInt(dataLimpa.substring(2,4))
        const ano = parseInt(dataLimpa.substring(4,8))

        const dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear()

        if(dia < 1 || dia > 31){
            setErroNascimento("Dia Inválido")
            return
        }

        if(mes < 1 || mes > 12){
            setErroNascimento("Mês inválido!")
            return
        }

        if(ano < 1900 || ano > anoAtual){
            setErroNascimento("Ano inválido!")
            return
        }

        const dataValida = new Date(ano, mes - 1, dia)

        if(
            dataValida.getDate() !== dia ||
            dataValida.getMonth() !== mes - 1 ||
            dataValida.getFullYear() !== ano
        ){
            setErroNascimento("Data inválida!")
            return
        }

        setErroNascimento("")
    }

    return (
        <>
            {/* Div do Header */}
            <div
                className="flex justify-between items-center h-[130px] md:h-[115px] lg:h-[146px] px-4 bg-[#3277CF]"
            >
                <ChevronLeft
                    className="-mt-14 -ml-2 w-[31px] h-[31px] md:h-[50px] md:w-[50px] lg:w-[50px] lg:h-[50px] cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                    color="#F9F9F9"
                    onClick={() => navigate("/")}
                />

                <img
                    src={logo}
                    alt="Logo Espectra"
                    onClick="" //onClick -> Volta para a tela Home do Psicopedagogo
                    className="w-[48px] h-[32px] -mt-14 cursor-pointer transform-gpu transform-all duration-300 ease-in-out hover:scale-110"
                />
            </div>

            {/* Div da foto do psicopedagogo */}
            <div className="flex justify-center -mt-18 z-10 relative md:-mt-22 lg:-mt-24">
                <div className="relative">
                    <img
                        src={fotoPsicopedagogo}
                        alt="Foto do psicopedagogo"
                        onClick=""
                        className="w-[148px] h-[148px] border-[#3277CF] border-4 rounded-full object-contain md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                    />

                    <BadgePlus
                        className="absolute bottom-2 right-2 w-[30px] h-[30px] bg-[#3277CF] rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-110 md:w-[40px] md:h-[40px]"
                        color="#FFFFFF"
                    />
                </div>
            </div>

            {/* Div que guarda os inputs do Psicopedagogo */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4 w-full md:mt-20">
                <div className="flex flex-col gap-2">
                    <label className="text-left text-[#3277CF] text-[18px] font-semibold">
                        Nome
                    </label>

                    <InputDefault
                        type="text"
                        variantInput={erroNome ? "errorInput" : "basicInput"}
                        value={nome}
                        onChange={validarNome}
                        className="!w-[300px] md:!w-[500px] lg:!w-[550px]"
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
                        onClick={alteracoesSalvas}
                    >
                        Salvar alterações
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AtualizarPerfilPsicopedagogo;