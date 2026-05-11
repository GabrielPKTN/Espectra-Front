import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import interrogacao from "../assets/general_photos/interrogacao.svg";

function telaCadastroAtividade() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen px-8 flex flex-col text">
            <h1 className="flex justify-center mt-10 instrument-sans text-xl">Socialização</h1>

            <div className="flex flex-col gap-25 mt-12">

                <div className="flex flex-col w-full gap-3">
                    <p className="instrument-sans font-semibold text-lg">Escreva a proposta de habilidade a ser desenvolvida:</p>
                    <input type="text" className="shadow-[0_0_20px_rgba(0,0,0,0.25)] w-full h-16 rounded-lg"/>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="instrument-sans font-semibold text-lg">Nível de desenvolvimento em meses quando a atividade for concluida:</p>
                    <div className="flex aling-center">
                        <select name="" id="" className="shadow-[0_0_20px_rgba(0,0,0,0.25)] px-1 w-25 rounded-lg h-7 inclusive-sans text-sm">
                            <option value="">0 Meses</option>
                            <option value="">1 Mês</option>
                        </select>
                            <img src={interrogacao} alt="" />
                    </div>
                   
                </div>

            </div>


            <div className="flex flex-col mt-25 justify-items-center-safe w-full gap-3">
                <button className="bg-[var(--bg-secondary-color)] w-70 rounded-md instrument-sans self-center text-white p-1">Salvar alterações</button>

                <button className="w-70 self-center text-[var(--bg-secondary-color)] shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-md p-1">Cancelar</button>
            </div>

        </div>
    )
}

export default telaCadastroAtividade