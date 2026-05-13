import CardAtividade from "../components/CardAtividade"
import HeaderUsuario from "../components/HeaderUsuario"
import OutlinedTitle from "../components/OutlinedTitle"

function TelaAtividades(){
    return(
        <div className="h-screen w-full">

            <div>
                <HeaderUsuario/>
                <h1 className="
                    justify-self-center instrument-sans font-bold text-2xl text-[#89C771]"
                    >
                        Socialização
                </h1>
            </div>
           

            <div className="justify-items-center">
                <h2 className="
                    instrument-sans font-bold text-lg"
                    >
                        Atividades Em andamento
                </h2>

                <CardAtividade/>
            </div>

            <div className="justify-items-center">
                <h2 className="
                    instrument-sans font-bold text-lg"
                    >
                        Habilidades adquiridas
                </h2>
            </div>

            
        </div>
    )
}

export default TelaAtividades