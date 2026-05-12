import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import interrogacao from "../assets/general_photos/interrogacao.svg";
import OutlinedTitle from "../components/OutlinedTitle";
import logotipoAzul from "../assets/logotipos/logotipo-azul.svg";

function telaCadastroAtividade() {
    const navigate = useNavigate();

    return (
    


        <div className="w-full lg:min-h-screen lg:bg-[var(--light-blue)] lg:flex lg:flex-col lg:items-center lg:justify-center ">

            <img 
                src={logotipoAzul}
                alt="" 
                className="hidden lg:block "
            />

            <div className="w-full h-screen px-8 flex flex-col lg:w-[60%] lg:bg-white lg:rounded-xl lg:h-[40%] lg:p-10 lg:gap-10 lg:shadow-[0_0_50px_rgba(0,0,0,0.25)]">
                
                <div className="flex justify-center w-full">
                    <OutlinedTitle>
                        Socialização
                     </OutlinedTitle>
                 </div>
            

                <div className="flex flex-col gap-25 mt-12 lg:mt-0">

                    <div className="flex flex-col w-full gap-3">
                        <p className="instrument-sans font-semibold text-lg md:text-2xl">Escreva a proposta de habilidade a ser desenvolvida:</p>
                        <input 
                            type="text" 
                            className="
                                shadow-[0_0_50px_rgba(0,0,0,0.25)] w-full h-16 rounded-lg bg-[#C9C9C9] opacity-30
                                md:w-[90%] md:h-40 md:self-center md:mr-8 
                                "
                                
                            />
                    </div>

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
                                    md:text-2xl md:w-40 md:h-12 
                                    "
                                >
                                <option value="">0 Meses</option>
                                <option value="">1 Mês</option>
                            </select>
                                <img src={interrogacao} alt="sinal de interrogação" className="size-7 md:size-9" />
                        </div>
                    
                    </div>

                </div>


                <div className="flex flex-col mt-25 justify-items-center-safe w-full gap-3 md:gap-5 md:mt-40 lg:mt-0 lg:flex-row-reverse lg:w-full lg:justify-center">
                    <button className="
                        bg-[var(--bg-secondary-color)] w-70 rounded-md instrument-sans self-center text-white p-1
                        md:w-80 md:h-14 md:text-xl md:font-semibold md:rounded-2xl
                        "
                    >
                        Salvar alterações
                    </button>

                    <button className="
                        w-70 self-center text-[var(--bg-secondary-color)] shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-md p-1
                        md:w-80 md:h-14 md:text-xl md:font-semibold md:rounded-2xl
                        "
                        >
                            Cancelar
                    </button>
                </div>

            </div>
 
        </div>
    )
}

export default telaCadastroAtividade