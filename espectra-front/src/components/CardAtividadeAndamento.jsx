import { useState } from "react";

import setaBaixo from "../assets/general_photos/setaBaixo.svg";
import Button from "./Button";
import trash from "../assets/general_photos/trash.svg";
import pen from "../assets/general_photos/pen.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios"



export default function CardAtividade({atividade, id, questao}) {
    const navigate = useNavigate()

    const [expandido, setExpandido] = useState(false);

    const token = localStorage.getItem("token")

    
    function navegar(path){
        localStorage.setItem("idAtividade", id)

        navigate(`${path}`)
    }

    async function declararHailidade(idHabilidade) {
        try {
            const response = await axios.put(
                `http://localhost:8080/v1/espectra/atividade/${idHabilidade}`,
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

    return (
        <div
            className="
                flex flex-col
                bg-[#F9F9F9]
                px-5 py-3
                rounded-xl
                border
                border-[#C6C6C6]
                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                w-full
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
                "
            >

                <p className="instrument-sans whitespace-nowrap overflow-hidden font-semibold md:text-xl md:font-medium lg:text-2xl">
                    { atividade }
                </p>

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
                <div className="mt-5 flex flex-col gap-5">
                    <button className="
                        instrument-sans font-bold cursor-pointer bg-[var(--bg-secondary-color)] p-2 rounded-full text-white
                        md:text-lg
                        lg:text-xl"
                        onClick={() => navegar('/tentativa')}

                        >
                            Realizar Tentativa
                    </button>

                    <button className="
                        instrument-sans font-bold cursor-pointer bg-[var(--bg-secondary-color)] p-2 rounded-full text-white
                        md:text-lg
                        lg:text-xl"
                        onClick={() => navegar('/tentativa/historico')}

                        >
                            Histórico de tentativas
                    </button>

                    <button className="
                        instrument-sans font-bold cursor-pointer bg-[var(--bg-secondary-color)] p-2 rounded-full text-white
                        md:text-lg
                        lg:text-xl"
                        onClick={() => {
                            declararHailidade(id)
                            window.location.reload()
                        }}

                        >
                            Declarar Habilidade
                    </button>

                    {questao == null ? (
                        <div className="flex gap-8 mt-4 justify-center">

                        <div className="flex items-center justify-center gap-1 cursor-pointer">
                            <img src={trash} alt="Excluir" className="w-7 md:w-8"/>
                            <span className="instrument-sans text-[#F94C4C] text-xs md:text-lg lg:text-xl">
                                Excluir atividade
                            </span>
                        </div>

                        <div className="
                            flex items-center justify-center gap-1 cursor-pointer" 
                            onClick={() => {
                                navigate('editar')
                            }}
                            >
                            <img src={pen} alt="Editar" className="w-7 md:w-8"/>
                            <span className="instrument-sans text-[var(--bg-secondary-color)] text-xs md:text-lg lg:text-xl">
                                Editar atividade
                            </span>
                        </div>

                    </div>
                    ) : (
                        <div className="flex gap-8 mt-4 justify-center"> 
                            <div className="flex items-center justify-center gap-1 cursor-pointer">
                                <img src={trash} alt="Excluir" className="w-7 md:w-8"/>
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