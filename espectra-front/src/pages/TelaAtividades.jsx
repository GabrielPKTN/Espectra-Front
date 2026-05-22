import CardAtividade from "../components/CardAtividadeAndamento"
import CardAtividadeAdquirida from "../components/CardAtividadeAdquirida"
import HeaderUsuario from "../components/HeaderUsuario"
import CardUser from "../components/CardUser";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import api from "../services/api"

function TelaAtividades(){
    
    const navigate = useNavigate()

    const pacienteId = 1 //localStorage.getItem("idPaciente")
    const habilidadeId = 1 //localStorage.getItem("idHabilidade")
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTc3OTQ0NzQ4NiwiZXhwIjoxMDAwMDE3Nzk0NDc0ODZ9.BGPk8eRBzXj2rd-j3KoZmgb6kXO7Rvv1seSRjtuyMoM")
    const token = localStorage.getItem("token")
    
    const [atividades, setAtividades] = useState([])
    const [mensagemErroCadastradas, setErroCadastradas] = useState("");
    const [mensagemErroConcluidas, setErroConcluidas] = useState("");

    async function getAtividades() {
        try {
            const response = await api.get(
                `/v1/espectra/atividade/${pacienteId}/${habilidadeId}`,{ 
                    headers: {
                        'x-access-token': token
                    }
            })

           
            return response.data.items || []

        } catch (error) {
            return []
        }
    }

    
    useEffect(() => {
        async function carregar() {
            const atividades = await getAtividades()
            setAtividades(atividades)
        }
        carregar()
    }, [])

    const atividadesConcluidas = atividades.filter(atividade => atividade.concluida == 1)
    const atividadesAndamento = atividades.filter(atividade => atividade.concluida == 0)

    useEffect(() => {
        if (atividadesConcluidas.length === 0) {
            setErroConcluidas("Não existem atividades concluídas")
        } else {
            setErroConcluidas("")
        }
    }, [atividadesConcluidas])

    useEffect(() => {
        if (atividadesAndamento.length === 0) {
            setErroCadastradas("Não existem atividades cadastradas")
        } else {
            setErroCadastradas("")
        }
    }, [atividadesConcluidas])
    

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

                    <div className="flex flex-col w-full overflow-y-auto max-h-[40vh] gap-3 lg:grid lg:grid-cols-2 ">
                            {atividadesAndamento.map((item) => (
                                <CardAtividade
                                    key={item.id_atividade}
                                    atividade={item.comportamento}
                                    id={item.id_atividade}
                                    questao={item.numero_questao}
                                />
                                
                            ))}

                            {
                                mensagemErroCadastradas && (
                                    <p className="
                                    text-red-500
                                    instrument-sans
                                    text-md
                                    md:text-lg
                                    lg:text-xl
                                    px-4
                                    mt-2
                                    self-center
                                  "
                                  >
                                    {mensagemErroCadastradas}
                                  </p>
                                )
                            }
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
                
                    
                    <div className="flex flex-col overflow-y-auto max-h-[40vh] w-full gap-3 lg:grid lg:grid-cols-2 ">
                            {atividadesConcluidas.map((item) => (
                                        <CardAtividadeAdquirida
                                            key={item.id_atividade}
                                            atividade={item.comportamento}
                                            id={item.id_atividade}
                                        />
                            ))}

{
                                mensagemErroConcluidas && (
                                    <p className="
                                    text-red-500
                                    instrument-sans
                                    text-md
                                    md:text-lg
                                    lg:text-xl
                                    px-4
                                    mt-2
                                    self-center
                                  "
                                  >
                                    {mensagemErroConcluidas}
                                  </p>
                                )
                            }
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