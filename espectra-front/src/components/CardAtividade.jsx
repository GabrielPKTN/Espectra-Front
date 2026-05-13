import Button from "../components/Button";
import trash from "../assets/general_photos/trash.svg";
import pen from "../assets/general_photos/pen.svg"

export default function CardAtividade() {
    return(
        <div className="
            flex flex-col bg-[#C6C6C6] 
            shadow-[0_0_50px_rgba(0,0,0,0.15)] 
            px-5 py-3 
            justify-between 
            items-center 
            h-[300px]
            "
            >
            <p>Descricao da Atividade</p>

            <Button/>

            <Button/>

            <Button/>

            <div className="flex gap-5">
                <div className="flex flex items-center justify-center">
                    <img src={trash} alt="" />
                    <span className="instrumente-sans text-sm">Exluir atividade</span>
                </div>
                <div className="flex items-center justify-center"> 
                    <img src={pen} alt="" />
                    <span className="instrument-sans text-sm text-[var(--secondary-color)]">Editar atividade</span>
                </div>
            </div>
            
        </div>
    )
}