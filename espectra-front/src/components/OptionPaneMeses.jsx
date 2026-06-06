import interrogacao from "../assets/general_photos/interrogacao.svg";
import ModalMeses from "../pages/ModalValorMeses";
import { useState } from "react";

export default function OptionPaneMeses({onChange}){

    const meses = Array.from({ length: 12 }, (_, index) => index + 1)

    const [modal, setModal] = useState(false)
    const [menuAberto, setMenuAberto] = useState(false)
    const [mesSelecionado, setMesSelecionado] = useState("")

    return(
        <div className="flex flex-col gap-3">
                                    
            <p className="
                instrument-sans font-semibold text-lg md:text-2xl
                "
            >
                Nível de desenvolvimento em meses quando a atividade for concluida:
            </p>

            <div className="flex w-full items-center gap-2">
                <div className="relative">
                    <button 
                        type="button"
                        onClick={() => setMenuAberto(!menuAberto)}
                        className={`font-semibold p-1 px-3 rounded-lg hover:bg-gray-100 transition-all focus:outline-none flex items-center justify-between inclusive-sans text-md md:text-lg lg:text-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] h-8 md:h-8 lg:h-10 w-28 md:w-35 bg-white
                        ${mesSelecionado 
                            ? "text-(--bg-secondary-color) font-bold"
                            : "text-(--bg-primary-color)"
                        }`}
                        title="Filtrar por meses">
                            <span>
                            {mesSelecionado 
                                ? `${mesSelecionado} ${mesSelecionado === 1 ? "Mês" : "Meses"}` 
                                : "Selecione"}
                        </span>
                        <span className="text-[10px] opacity-60 ml-1">▼</span>
                    </button>

                    {menuAberto && (
                        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden max-h-48 overflow-y-auto">
                            {meses.map((mes, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => {
                                        setMesSelecionado(mes);
                                        onChange(mes); // Passa o valor para o componente pai
                                        setMenuAberto(false); // Fecha o menu
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 inclusive-sans text-md text-gray-700 transition-colors"
                                >
                                    {mes} {mes === 1 ? "Mês" : "Meses"}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

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