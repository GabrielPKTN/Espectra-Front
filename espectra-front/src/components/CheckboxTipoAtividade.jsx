export default function CheckboxAtividade({children}){
    return(
        <div className="flex flex-col gap-1">
            <p className="instrument-sans font-semibold text-lg ">A habilidade que vai ser desenvolvida é?...</p>

            <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" className="size-5 rounded-lg md:size-7"/>
                <span className="instrument-sans text-lg ">Personalizada</span>
            </div>

            <div className="flex  gap-2">
                <input type="checkbox" name="" id="" className="size-10 rounded-lg md:size-7" />
                <span className="instrument-sans text-lg ">Baseada em habilidades não desenvolvidas com respostas da avaliação feita.</span> 
            </div>
           
        </div>
    )
}