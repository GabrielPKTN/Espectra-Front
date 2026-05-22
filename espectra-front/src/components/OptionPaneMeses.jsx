import interrogacao from "../assets/general_photos/interrogacao.svg";
import ModalMeses from "../pages/ModalValorMeses";
import { useState } from "react";

export default function OptionPaneMeses({onChange}){

    const meses = Array.from({ length: 12 }, (_, index) => index + 1)

    const [modal, setModal] = useState(false)

    return(
        <div className="flex flex-col gap-3">
                                    
            <p className="
                instrument-sans font-semibold text-lg md:text-2xl
                "
            >
                Nível de desenvolvimento em meses quando a atividade for concluida:
            </p>

            <div className="flex w-full align-middle gap-1">
                <select 
                    name="" 
                    id="" 
                    className="
                        shadow-[0_0_20px_rgba(0,0,0,0.25)] px-1 w-25 rounded-lg h-7 inclusive-sans text-sm 
                        md:text-lg md:w-40 md:h-8
                        lg:h-10 lg:text-xl 
                        "
                        onChange={(e) => onChange(e.target.value)}
                    >
                    {meses.map((mes, index) => (
                        <option key={index} value={mes}>
                            {mes} {mes === 1 ? "Mês" : "Meses"}
                        </option>
                    ))}

                </select>
                    <img 
                        src={interrogacao} 
                        alt="sinal de interrogação" 
                        className="size-7 md:size-9"
                        onClick={() => {
                            setModal(true)
                        }}
                    />
            </div>

            {modal && (
                <ModalMeses
                    onCancel={() => setModal(false)}
                    onConfirm={() => {
                        setModal(false)
                    }}
                />
            )}

        </div>

    )
    

}