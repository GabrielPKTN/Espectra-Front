import InputDefault from "../components/InputDefault"
import defaultPhoto from "../assets/general_photos/default-photo.png"
import Button from "../components/Button.jsx"
import HeaderResponsavel from "../components/HeaderResponsavel.jsx"
import antonioPhoto from "../assets/general_photos/antonio_photo.png"
import { useState } from "react"
import axios from "axios"


function TelaCadastroFamiliar() {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [diagnostico, setDiagnostico] = useState("")
    const [serieEscolar, setSerieEscolar] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [grauSuporte, setGrauSuporte] = useState("")

    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(null)

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

        if (cpfTexto.length === 0){
            throw new Error("O CPF é obrigatório")
        }

        if(cpfLimpo.length !== 11) {
            throw new Error("O CPF deve conter exatamente 11 números.")
        }

        if(!regexCaracteresPermitidos.test(cpfTexto)) {
            throw new Error("O CPF deve conter apenas números, pontos e traços. Remova letras ou símbolos como '@'.")
        }

        if(/^(\d)\1{10}$/.test(cpfLimpo)) {
            throw new Error("CPF inválido (números repetidos).")
        }

        return cpfLimpo
    }

    function validarDiagnostico(diagnostico) {
        const diagnosticoLimpo = diagnostico ? diagnostico.trim() : ""
        const regexDiagnosticoValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

        if(diagnosticoLimpo.length === 0) {
            throw new Error("O diagnóstico é obrigatório.")
        }

        if(diagnosticoLimpo.length > 100) {
            throw new Error("O diagnóstico não pode conter mais do que 100 caracteres.")
        }

        if(!regexDiagnosticoValido.test(diagnosticoLimpo)) {
            throw new Error("O diagnóstico não deve conter números ou caracteres especiais.")
        }
        
        return diagnosticoLimpo
    }

    function validarDataNascimento(data) {
        const dataTexto = data ? data.trim() : ""
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/
        const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if(dataTexto.length === 0) {
            throw new Error("A data de nascimento é obrigatória")
        }

        if(!regexData.test(dataTexto)) {
            throw new Error("A data deve estar no formato DD/MM/AAAA.")
        }

        const partes = dataTexto.split("/")
        const dia = parseInt(partes[0], 10)
        const mes = parseInt(partes[1], 10)
        const ano = parseInt(partes[2], 10)

        if(mes < 1 || mes > 12) {
            throw new Error("Mês inválido.")
        }

        const anoBissexto = (ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0) 
        if (anoBissexto) {
            diasPorMes[1] = 29
        }

        if(dia < 1 || dia > diasPorMes[mes - 1]) {
            throw new Error(`O mês inserido não possui o dia ${dia}`);
        }

        return dataTexto
    }

    async function cadastrarFamiliar() {

        try {
            setLoading(true)
            setErro(null)

            //const token = localStorage.getItem("token")
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTI4MjM1NywiZXhwIjoxMDAwMDE3NzkyODIzNTd9.Gg83eaBKGXg2Xa9tNm5rjAxXn9_8mJxj4w2GBG756yk"

            const nomeValidado = validarNome(nome)
            const cpfValidado = validarCpf(cpf)
            const diagnosticoValidada = validarDiagnostico(diagnostico)
            const dataNascimentoValidada = validarDataNascimento(dataNascimento)

            const response = await axios.post(`http://localhost:8080/v1/espectra/paciente/`, {
                headers: {
                    "x-access-token": token
                }
            })

        } catch (error) {
            setErro(error.message)
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

            <div className="flex flex-col items-center gap-10 lg:gap-0 lg:mt-25">
                <img src={defaultPhoto} alt="" className="w-25 md:w-35" />

                <div className="flex flex-col gap-2 px-10">

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nome</span>
                        <InputDefault
                        //value={}
                        //onChange={}

                        />
                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">CPF</span>
                        <InputDefault
                        //value={}
                        //onChange={}

                        />
                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Diagnóstico</span>
                        <InputDefault
                        //value={}
                        //onChange={}
                        />
                    </div>

                    <div className="flex gap-2">

                        <div className="flex flex-col items-start w-[50%]">

                            <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Série escolar</span>

                            <select name="" id="" className="border rounded-lg h-12 w-full border-[var(--bg-primary-color)]">
                                <option value=""></option>
                            </select>

                        </div>

                        <div className="w-[50%]">

                            <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Nascimento</span>

                            <InputDefault
                                //value={}
                                //onChange={}
                                placeholder={"DD/MM/AAAA"}
                            />

                        </div>

                    </div>

                    <div>
                        <span className="inclusive-sans text-xl font-semibold text-[var(--dark-blue)]">Grau suporte</span>
                        <InputDefault
                        //value={}
                        //onChange={}

                        />
                    </div>

                </div>


                <div className="flex self-center md:gap-10 md:flex md:flex-row-reverse lg:mt-10">
                    <Button>Salvar</Button>
                    <button className="hidden md:block md:text-[var(--bg-primary-color)] md:instrument-sans md:text-xl md:w-48 md:h-12 md:rounded-lg md:font-bold md:shadow-2xl">Cancelar</button>
                </div>

            </div>

        </div>
    )
}

export default TelaCadastroFamiliar