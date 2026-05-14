import CardAtividade from "../components/CardAtividadeAndamento"
import CardAtividadeAdquirida from "../components/CardAtividadeAdquirida"
import HeaderUsuario from "../components/HeaderUsuario"
import CardUser from "../components/CardUser";
import { useNavigate } from "react-router-dom";

function TelaAtividades(){
    
    const navigate = useNavigate()

    return(
        <div className="flex md:gap-5">

            <CardUser/>

            <div className="h-screen w-full flex flex-col px-4 md:py-8 gap-6 lg:gap-10">
            
                <div>
                    <HeaderUsuario/>
    
                    
                    <h1 className="
                        justify-self-center instrument-sans font-bold text-2xl text-[#89C771] 
                        md:text-3xl
                        lg:text-5xl"
                        >
                            Socialização
                    </h1>
                </div>
               
    
                <div className="flex flex-col justify-items-center items-center gap-5 md:mt-4 lg:items-start">
                    <h2 className="
                        instrument-sans font-bold text-lg 
                        md:text-2xl
                        lg:text-3xl"
                        >
                            Atividades Em andamento:
                    </h2>

                    <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-3">
                        <CardAtividade/>
    
                        <CardAtividade/>
                    </div>
    
                  
                </div>
    
                <div className="flex flex-col justify-items-center items-center gap-5 lg:items-start">
                    <h2 className="
                        instrument-sans font-bold text-lg 
                        md:text-2xl
                        lg:text-3xl"
                        >
                            Habilidades adquiridas:
                    </h2>

                    <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-3 ">
                        <CardAtividadeAdquirida/>
    
                        <CardAtividadeAdquirida/>
                    </div>

                   
                </div>
    
                <button className="
                    bg-[var(--bg-secondary-color)] text-white p-2 rounded-full 
                    instrument-sans font-bold 
                    md:hidden
                    "
                    onClick={() => {
                        navigate('/atividades/cadastrar')
                    }}
                    >
                        Adicionar atividade
                </button>
    
                
            </div>



        </div>
        
        
    )
}

export default TelaAtividades