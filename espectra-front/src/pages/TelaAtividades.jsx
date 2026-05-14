import CardAtividade from "../components/CardAtividadeAndamento"
import CardAtividadeAdquirida from "../components/CardAtividadeAdquirida"
import HeaderUsuario from "../components/HeaderUsuario"
import userPhoto from "../assets/general_photos/userPhoto.png";
import home from "../assets/general_photos/home.svg";
import add from "../assets/general_photos/add.svg";

function TelaAtividades(){
    return(
        <div className="flex md:gap-5">

            <div className="
                hidden 
                md:flex md:flex-col md:w-[50%] md:gap-10 md:p-4  md:shadow-[10px_0_15px_-3px_rgba(0,0,0,0.3)] rounded-3xl
                lg:w-[30%]"
                >

                <div className="flex items-center gap-4">

                    <img src={userPhoto} alt="" />

                    <span className="instrument-sans text-xl font-bold text-[var(--bg-primary-color)]">Olá, Larissa</span>

                </div>

                <div className="flex flex-col gap-4 pl-2">

                    <div className="flex gap-3">

                        <img src={home} alt="" />

                        <span className="instrument-sans font-bold text-[var(--bg-primary-color)] text-lg">Início</span>

                    </div>

                    <div className="flex gap-3">

                        <img src={add} alt="" />

                        <span className="instrument-sans font-bold text-[var(--bg-primary-color)] text-lg">Adicionar atividade</span>

                    </div>
                </div>

                
            </div>

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
                        lg:"
                        >
                            Atividades Em andamento
                    </h2>

                    <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-3">
                        <CardAtividade/>
    
                        <CardAtividade/>
                    </div>
    
                  
                </div>
    
                <div className="flex flex-col justify-items-center items-center gap-5 lg:items-start">
                    <h2 className="
                        instrument-sans font-bold text-lg md:text-2xl"
                        >
                            Habilidades adquiridas
                    </h2>

                    <CardAtividadeAdquirida/>
    
                    <CardAtividadeAdquirida/>
                </div>
    
                <button className="
                    bg-[var(--bg-secondary-color)] text-white p-2 rounded-full 
                    instrument-sans font-bold 
                    md:hidden
                    "
                    >
                        Adicionar atividade
                </button>
    
                
            </div>



        </div>
        
        
    )
}

export default TelaAtividades