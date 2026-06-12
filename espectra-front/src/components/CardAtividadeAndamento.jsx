import { useState } from "react";
import setaBaixo from "../assets/general_photos/setaBaixo.svg";
import Button from "./Button.jsx";
import trash from "../assets/general_photos/trash.svg";
import pen from "../assets/general_photos/pen.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import api from "../services/api.js"
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";


export default function CardAtividade({ atividade, id, questao }) {
    const navigate = useNavigate()

    const [expandido, setExpandido] = useState(false);

    const token = localStorage.getItem("token")

    const idPaciete = localStorage.getItem("id_paciente")
    const idUsuario = localStorage.getItem("id_usuario")

    function navegar(path, idAtividade) {

        localStorage.setItem("id_atividade", idAtividade);

        navigate(`${path}/${idAtividade}`);
    }

    async function declararHailidade(idAtividade) {
        try {
            const response = await api.put(
                `/v1/espectra/atividade/${idAtividade}`,
                {},
                {
                    headers: {
                        'x-access-token': token
                    }
                }
            )

            const data = response.data
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    async function excluirAtividade(idAtividade, idPaciente, idUsuario) {

        const confirmar = await Swal.fire({
            title: 'Atenção!',
            text: 'Tem certeza que deseja excluir esta atividade?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e31b1b',
            cancelButtonColor: '#4285f4',
            confirmButtonText: 'Excluir',
            cancelButtonText: 'Cancelar',
        });

        if (!confirmar.isConfirmed) return;

        try {
            const response = await api.delete(
                `/v1/espectra/atividade/${idAtividade}`,

                {
                    headers: {
                        'x-access-token': token
                    },

                    data: {
                        id_usuario: idUsuario,
                        id_paciente: idPaciente
                    },
                }
            )

            if (response.status === 200) {
                toast.success("Atividade excluída com sucesso!")
                window.location.reload()
            }


        } catch (error) {
            console.log(error)

            toast.error(
                error.response?.data?.message ||
                "Erro ao excluir atividade."
            );
        }
    }


    return (
        <div
            className="
                flex flex-col
                bg-[#F9F9F9]
                px-4 py-2.5
                rounded-xl
                border
                border-[#C6C6C6]
                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                w-full
                min-w-0
                lg:self-start
            "
        >

            <div
                onClick={() => setExpandido(!expandido)}
                className="
                    flex
                    items-center
                    justify-between
                    cursor-pointer
                    min-w-0
                "
            >

                <p
                    className={`
                    instrument-sans
                    font-semibold
                    text-base
                    md:text-lg
                    md:font-medium
                    lg:text-xl
                    transition-all duration-300
                    ease-in-out
                    min-w-0

                    ${expandido
                            ? "whitespace-normal break-words"
                            : "whitespace-nowrap overflow-hidden text-ellipsis"
                        }
                `}
                > {atividade} </p>

                <img
                    src={setaBaixo}
                    alt="Expandir card"
                    className={`
                        transition-transform duration-300
                        ${expandido ? "rotate-180" : ""}
                    `}
                />

            </div>

            {expandido && (
                <div className="mt-4 flex flex-col gap-2">
                    <button className="
                        instrument-sans font-bold cursor-pointer bg-(--bg-secondary-color) p-2 rounded-full text-white
                        md:text-base
                        lg:text-lg"
                        onClick={() => navegar('/tentativa', id)}

                    >
                        Realizar Tentativa
                    </button>

                    <button className="
                        instrument-sans font-bold cursor-pointer bg-(--bg-secondary-color) p-2 rounded-full text-white
                        md:text-base
                        lg:text-lg"
                        onClick={() => navigate(`/tentativa/historico/${id}`)}

                    >
                        Histórico de tentativas
                    </button>

                    <button className="
                        instrument-sans font-bold cursor-pointer bg-(--bg-secondary-color) p-2 rounded-full text-white
                        md:text-base
                        lg:text-lg"
                        onClick={() => {
                            declararHailidade(id)
                            window.location.reload()
                        }}

                    >
                        Declarar Habilidade
                    </button>

                    {questao == null ? (
                        <div className="flex gap-8 mt-4 justify-center">

                            <div className="
                            flex items-center justify-center gap-1 cursor-pointer"
                                onClick={() => {
                                    excluirAtividade(id, idPaciete, idUsuario);
                                }}
                            >
                                <img src={trash} alt="Excluir" className="w-7 md:w-8" />
                                <span className="instrument-sans text-[#F94C4C] text-xs md:text-lg lg:text-xl">
                                    Excluir atividade
                                </span>
                            </div>

                            <div className="
                            flex items-center justify-center gap-1 cursor-pointer"
                                onClick={() => {
                                    navegar('/atividades/editar', id)
                                }}
                            >
                                <img src={pen} alt="Editar" className="w-7 md:w-8" />
                                <span className="instrument-sans text-(--bg-secondary-color) text-xs md:text-lg lg:text-xl">
                                    Editar atividade
                                </span>
                            </div>

                        </div>
                    ) : (
                        <div className="flex gap-8 mt-4 justify-center">

                            <div className="
                                flex items-center justify-center gap-1 cursor-pointer"
                                onClick={() => {
                                    excluirAtividade(id, idPaciete, idUsuario)
                                }}
                            >
                                <img src={trash} alt="Excluir" className="w-7 md:w-8" />
                                <span className="instrument-sans text-[#F94C4C] text-xs md:text-lg lg:text-xl">
                                    Excluir atividade
                                </span>
                            </div>

                        </div>
                    )}


                </div>
            )}


        </div>
    )
}