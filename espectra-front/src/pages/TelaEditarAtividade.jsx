import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import interrogacao from "../assets/general_photos/interrogacao.svg";
import OutlinedTitle from "../components/OutlinedTitle.jsx";
import logotipoAzul from "../assets/logotipos/logotipo-azul.svg";
import ModalMeses from "../pages/ModalValorMeses.jsx";
import { useState } from "react";
import { useEffect } from "react";
import OptionPaneMeses from "../components/OptionPaneMeses.jsx";
import api from "../services/api.js";

function telaEditarAtividade() {
    const navigate = useNavigate();

    const [idAtividade, setIdAtividade] = useState(null)

    useEffect(() => {
        const id = Number(localStorage.getItem("id_atividade"))

        setIdAtividade(id)

    }, [])

    const idUsuario = 1 //localStorage.getItem('id_ususario')

    const token = localStorage.getItem('token')

    const [valorMeses, setValorMeses] = useState(1)
    const [erroComportamento, setErroComportamento] = useState("")
    const [mensagemSucesso, setMensagemSucesso] = useState("")
    const [comportamento, setComportamento] = useState("")

    const nomeHabilidade = localStorage.getItem("nome_habilidade")
    const corHabilidade = localStorage.getItem("cor_habilidade")

    async function editarAtividade() {
        try {
            const response = await api.put(
                `/v1/espectra/atividade/personalizada/${idAtividade}`,
                {
                    id_usuario: idUsuario,
                    comportamento: comportamento,
                    valor_meses: Number(valorMeses)
                },
                {
                    headers: {
                        'x-access-token': token
                    }
                }
            )


            const data = response.data

            if (data.status_code == 200)
                setMensagemSucesso("Atividade atualizada com sucesso!")

            setTimeout(() => {
                navigate("/atividades")
            }, 2000)


        } catch (error) {
            console.log(error)
        }
    }

    async function salvarEdicao() {
        if (comportamento.trim() === "") {
            setErroComportamento("O comportamento é obrigatório")
            return
        }

        setComportamento("")
        editarAtividade()
    }


    return (



        <div className="w-full lg:min-h-screen  lg:bg-(--light-blue) lg:flex lg:flex-col lg:items-center lg:justify-center">

            <div className="w-full h-screen px-8 flex flex-col mt-16 overflow-hidden lg:overflow-hidden lg:w-[60%] lg:bg-white lg:rounded-xl lg:h-[40%] lg:p-10 lg:gap-15 lg:shadow-[0_0_50px_rgba(0,0,0,0.25)]">

                <div className="flex justify-center w-full">
                    <h1 style={{ color: corHabilidade }}
                        className="instrument-sans text-3xl font-bold md:text-4xl">
                        {nomeHabilidade}
                    </h1>
                </div>


                <div className="flex flex-col gap-25 mt-12 lg:mt-0">


                    <div className="flex flex-col w-full gap-3">
                        <p className="instrument-sans font-semibold text-lg md:text-2xl">Escreva a proposta de habilidade a ser desenvolvida:</p>
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
                            placeholder="Digite o comportamento..."
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
                                md:mt-5
                                lg:
                            ">
                        {mensagemSucesso}
                    </div>
                )}


                <div className="flex flex-col mt-25 justify-items-center-safe w-full gap-3 md:gap-5 md:mt-10 lg:mt-0 lg:flex-row-reverse lg:w-full lg:justify-center">
                    <button className="
                              bg-(--bg-secondary-color) hover:bg-(--bg-primary-color) cursor-pointer w-70 h-10 rounded-md instrument-sans font-semibold self-center text-white p-1
                              md:w-66 md:h-12 md:text-xl md:font-semibold md:rounded-xl
                              "
                        onClick={salvarEdicao}
                    >
                        Salvar alterações
                    </button>

                    <button className="
                              w-70 h-10 self-center hover:bg-gray-100 text-(--bg-secondary-color) cursor-pointer instrument-sans font-semibold shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-md p-1
                              md:w-66 md:h-12 md:text-xl md:font-semibold md:rounded-xl
                              "
                        onClick={() => { navigate('/atividades') }}
                    >
                        Cancelar
                    </button>
                </div>

            </div>

        </div>
    )
}

export default telaEditarAtividade