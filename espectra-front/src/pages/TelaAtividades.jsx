import CardAtividade from "../components/CardAtividadeAndamento"
import CardAtividadeAdquirida from "../components/CardAtividadeAdquirida"
import HeaderUsuario from "../components/HeaderUsuario"
import CardUser from "../components/CardUser";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

function TelaAtividades(){
    
    const navigate = useNavigate()

    const pacienteId = 1
    const habilidadeId = 1
    const tokenTeste = localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTE4ODI1MCwiZXhwIjoxMDAwMDE3NzkxODgyNTB9.0N10krJeH87PiEk41wLB6i1dXTQZnWyC-auoAA-aaxk")
    const token = localStorage.getItem("token")
    const [atividades, setAtividades] = useState([])

    async function getAtividades() {
        try {
            const response = await axios.get(
                `http://localhost:8080/v1/espectra/atividade/${pacienteId}/${habilidadeId}`,{ 
                    headers: {
                        'x-access-token': token
                    }
            })

            const data = response.data
           
            return data.items

        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        async function carregar() {
            try{
                const atividades = await getAtividades()
                setAtividades(atividades)
            }catch(error){
                console.log(error)
            }
        }
        carregar()
    }, [])

    const atividadesConcluidas = atividades.filter(atividade => atividade.concluida == 1)
    const atividadesAndamento = atividades.filter(atividade => atividade.concluida == 0)
    

    return(
        <div className="flex md:gap-5">

            <CardUser/>

            <div className="h-screen w-full flex flex-col px-4 md:w-[65%] md:py-8 gap-6 lg:gap-10">
            
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

                    <div className="flex flex-col w-full gap-3 lg:grid lg:grid-cols-2 ">
                            {atividadesAndamento.map((item) => (
                                <CardAtividade
                                    key={item.id_atividade}
                                    atividade={item.comportamento}
                                    id={item.id_atividade}
                                    questao={item.numero_questao}
                                />
                                
                            ))}
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
                
                    
                    <div className="flex flex-col w-full gap-3 lg:grid lg:grid-cols-2 ">
                            {atividadesConcluidas.map((item) => (
                                        <CardAtividadeAdquirida
                                            key={item.id_atividade}
                                            atividade={item.comportamento}
                                            id={item.id_atividade}
                                        />
                            ))}
                    </div>
                    
                
                </div>
    
                <button className="
                    bg-[var(--bg-secondary-color)] text-white p-2 rounded-full 
                    instrument-sans font-bold 
                    md:hidden
                    "
                    onClick={() => {
                        navigate('/atividades/adicionar')
                    }}
                    >
                        Adicionar atividade
                </button>
    
                
            </div>



        </div>
        
        
    )
}

export default TelaAtividades