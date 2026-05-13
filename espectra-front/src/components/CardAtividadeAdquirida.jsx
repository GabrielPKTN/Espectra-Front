import { useState } from "react";

import setaBaixo from "../assets/general_photos/setaBaixo.svg";
import Button from "./Button";
import trash from "../assets/general_photos/trash.svg";
import pen from "../assets/general_photos/pen.svg";



export default function CardAtividade() {

    const [expandido, setExpandido] = useState(false);

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

                <p className="instrument-sans font-semibold">
                    Descrição da atividade
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
                        instrument-sans font-bold bg-[var(--bg-secondary-color)] p-2 rounded-full text-white"

                        >
                            Histórico de tentativas
                    </button>

                    



                </div>
            )}

        </div>
    )
}