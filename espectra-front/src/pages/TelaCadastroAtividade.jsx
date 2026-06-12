import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import interrogacao from "../assets/general_photos/interrogacao.svg";
import OutlinedTitle from "../components/OutlinedTitle";
import { useState } from "react";
import CheckboxAtividade from "../components/CheckboxTipoAtividade";
import OptionPaneMeses from "../components/OptionPaneMeses";
import HeaderUsuario from "../components/HeaderUsuario";
import api from "../services/api"
import { useEffect } from "react";
import OptionPaneAtividades from "../components/OptionPaneAtividades"
import Logotipo from "../components/logotipo";
import SecondButton from "../components/SecondButton";

function telaCadastroAtividade() {
    const navigate = useNavigate();

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const idUsuario = Number(localStorage.getItem('id_usuario'))
    const idPaciente = Number(localStorage.getItem('id_paciente'))
    const idHabilidade = Number(localStorage.getItem('id_habilidade'))
    const token = localStorage.getItem('token')

    const [comportamento, setComportamento] = useState("")
    const [valorMeses, setValorMeses] = useState(0)

    const [valorAtividade, setValorAtividade] = useState({})

    const [erroComportamento, setErroComportamento] = useState("")
    const [mensagemSucesso, setMensagemSucesso] = useState("")

    const nomeHabilidade = localStorage.getItem("nome_habilidade")
    const corHabilidade = localStorage.getItem("cor_habilidade")


    async function cadastrarPersonalizada() {
        try {
            const response = await api.post(
                `/v1/espectra/atividade/personalizada/`,

                {
                    id_usuario: idUsuario,
                    id_paciente: idPaciente,
                    comportamento: comportamento,
                    valor_meses: valorMeses,
                    id_habilidade: idHabilidade
                },
                {
                    headers: {
                        'x-access-token': token
                    }
                }
            )

            const data = response.data

            if (data.status_code == 201)
                setMensagemSucesso("Atividade cadastrada com sucesso!")

            setTimeout(() => {
                navigate("/atividades")
            }, 1000)

        } catch (error) {
            return false
        }

    }

    async function cadastrarPortage(params) {
        if (!valorAtividade) return;

        try {
            const response = await api.post(
                `/v1/espectra/atividade/portage/`,

                {
                    id_usuario: idUsuario,
                    id_paciente: idPaciente,
                    id_atividade_portage: valorAtividade
                },
                {
                    headers: {
                        'x-access-token': token
                    }
                }
            )

            const data = response.data

            if (data.status_code == 201) {
                setMensagemSucesso("Atividade cadastrada com sucesso!")
            }


            setTimeout(() => {
                navigate("/atividades")
            }, 1000)

        } catch (error) {
            return false
        }
    }


    async function salvarAtividade() {

        if (opcaoSelecionada === 'personalizada') {
            if (comportamento.trim() === "") {
                setErroComportamento("O comportamento é obrigatório")
                return
            }

            setErroComportamento("")
            await cadastrarPersonalizada()
        } else if (opcaoSelecionada === 'portage') {
            await cadastrarPortage()
        }
    }

    return (
        <div className="w-full h-screen md:h-auto md:min-h-screen md:bg-[var(--light-blue)] md:flex md:flex-col md:items-center md:justify-center lg:justify-start lg:h-auto lg:h-screen">

            <HeaderUsuario />

            <div className="w-full h-screen px-8 flex flex-col md:w-[90%] md:bg-white md:rounded-xl md:h-[75vh] md:p-10 md:gap-10 md:shadow-[0_0_50px_rgba(0,0,0,0.25)] lg:h-auto lg:w-[60%] lg:mt-20">

                <div className="flex justify-center w-full" >

                    <h1 style={{ color: corHabilidade }}
                        className="instrument-sans text-3xl font-bold md:text-4xl">
                        {nomeHabilidade}
                    </h1>
                </div>


                <div className="flex flex-col gap-5 mt-5 lg:mt-0">

                    <CheckboxAtividade
                        opcaoSelecionada={opcaoSelecionada}
                        setOpcaoSelecionada={setOpcaoSelecionada}
                    />

                    {opcaoSelecionada === 'personalizada' && (
                        <div className="flex flex-col w-full gap-3">
                            <p className="instrument-sans font-semibold text-lg md:text-2xl">Escreva a proposta de atividade a ser desenvolvida:</p>
                            <textarea
                                type="text"
                                className="
                                        shadow-[0_0_50px_rgba(0,0,0,0.10)]
                                        w-full
                                        h-18
                                        rounded-lg
                                        bg-[#e8e8e8]
                                        instrument-sans
                                        items-center
                                        leading-18
                                        py-0

                                        px-4
                                        text-black
                                        placeholder:text-gray-500

                                        md:w-[90%]
                                        md:h-30
                                        md:self-center
                                        md:mr-8
                                        md:text-xl
                                    "
                                placeholder="Descreva o comportamento..."
                                onChange={(e) => {
                                    setComportamento(e.target.value)

                                    if (e.target.value.trim() !== "") {
                                        setErroComportamento("")
                                    }
                                }}
                            />

                            {erroComportamento && (
                                <p className="text-red-500 text-sm md:self-center md:w-[90%]">
                                    {erroComportamento}
                                </p>
                            )}

                            <OptionPaneMeses
                                onChange={(valor) => {
                                    setValorMeses(valor)
                                }}
                            />

                        </div>


                    )}

                    {opcaoSelecionada === 'portage' && (
                        <div className="flex flex-col gap-5 w-full">
                            <OptionPaneAtividades
                                onChange={(valor) => {
                                    setValorAtividade(valor)
                                }}
                            />
                        </div>
                    )}



                </div>

                {mensagemSucesso && (
                    <div className="
                                bg-green-500
                                text-white
                                p-3
                                rounded-lg
                                text-center
                                font-semibold
                                mt-3
                                md:mt-0
                                lg:
                            ">
                        {mensagemSucesso}
                    </div>
                )}


                <div className="flex flex-col mt-5 justify-center items-center w-full gap-3 md:gap-5 md:mt-5 lg:mt-0 md:flex-row-reverse lg:w-full lg:justify-center ">
                    <SecondButton onClick={salvarAtividade} variantClick="firstButton">
                        Salvar alterações
                    </SecondButton>


                    <SecondButton onClick={() => navigate("/atividades")} variantClick="secondButton">
                        Cancelar
                    </SecondButton>
                </div>

            </div>

        </div>

    )
}

export default telaCadastroAtividade