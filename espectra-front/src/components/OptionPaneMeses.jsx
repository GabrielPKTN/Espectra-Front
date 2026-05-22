import interrogacao from "../assets/general_photos/interrogacao.svg";

export default function OptionPaneMeses(){

    const meses = Array.from({ length: 13 }, (_, index) => index);

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
                    >
                    {meses.map((mes) => (
                        <option key={mes} value={mes}>
                            {mes} {mes === 1 ? "Mês" : "Meses"}
                        </option>
                    ))}

                </select>
                    <img src={interrogacao} alt="sinal de interrogação" className="size-7 md:size-9" />
            </div>

        </div>

    )
    

}