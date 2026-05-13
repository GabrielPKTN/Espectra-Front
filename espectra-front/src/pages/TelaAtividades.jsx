import CardAtividade from "../components/CardAtividadeAndamento"
import CardAtividadeAdquirida from "../components/CardAtividadeAdquirida"
import HeaderUsuario from "../components/HeaderUsuario"
import OutlinedTitle from "../components/OutlinedTitle"

function TelaAtividades(){
    return(
        <div className="h-screen w-full flex flex-col px-10 gap-6">

            <div>
                <HeaderUsuario/>
                <h1 className="
                    justify-self-center instrument-sans font-bold text-2xl text-[#89C771]"
                    >
                        Socialização
                </h1>
            </div>
           

            <div className="flex flex-col justify-items-center items-center gap-5">
                <h2 className="
                    instrument-sans font-bold text-lg"
                    >
                        Atividades Em andamento
                </h2>

                <CardAtividade/>

                <CardAtividade/>
            </div>

            <div className="flex flex-col justify-items-center items-center gap-5">
                <h2 className="
                    instrument-sans font-bold text-lg"
                    >
                        Habilidades adquiridas
                </h2>

                <CardAtividadeAdquirida/>

                <CardAtividadeAdquirida/>
            </div>

            <button className="bg-[var(--bg-secondary-color)] text-white p-2 rounded-full instrument-sans font-bold ">Adicionar atividade</button>

            
        </div>
    )
}

export default TelaAtividades