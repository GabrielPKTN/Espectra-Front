import { useState } from "react";

import setaBaixo from "../assets/general_photos/setaBaixo.svg";
import Button from "./Button";
import trash from "../assets/general_photos/trash.svg";
import pen from "../assets/general_photos/pen.svg";
import { useNavigate } from "react-router-dom";



export default function CardAtividade({atividade, id}) {
    const navigate = useNavigate()

    const [expandido, setExpandido] = useState(false)

    function navegar(path){
        localStorage.setItem("id_atividade", id)

        navigate(`${path}`)
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

                    ${
                    expandido
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
                        instrument-sans font-bold bg-(--bg-secondary-color) p-2 rounded-full text-white md:text-lg lg:text-xl"
                        onClick={() => navegar(`/tentativa/historico/${id}`)}

                        >
                            Histórico de tentativas
                    </button>

                    



                </div>
            )}

        </div>
    )
}