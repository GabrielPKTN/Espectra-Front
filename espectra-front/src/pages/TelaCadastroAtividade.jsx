import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import interrogacao from "../assets/general_photos/interrogacao.svg";
import OutlinedTitle from "../components/OutlinedTitle";
import logotipoAzul from "../assets/logotipos/logotipo-azul.svg";
import { useState } from "react";
import CheckboxAtividade from "../components/CheckboxTipoAtividade";
import OptionPaneMeses from "../components/OptionPaneMeses";
import HeaderUsuario from "../components/HeaderUsuario";
import api from "../services/api"

function telaCadastroAtividade() {
    const navigate = useNavigate();

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
    
    const idUsuario = localStorage.getItem('id_usuario')
    const idPaciente = localStorage.getItem('id_paciente')
    const idHabilidade = localStorage.getItem('id_habilidade')
    
    const [comportamento, setComportamento] = useState("")
    const [valorMeses, setValorMeses] = useState(0)
    


    async function cadastrarPersonalizada() {
        try {
            const response = await api.post(
                `v1/espectra/atividade/personalizada/`,
                
                {
                    id_ususario: 1,
                    id_paciente: 1,
                    comportamento: comportamento,
                    valor_meses: 1,
                    id_habilidade: 1

                }
            )

            const data = response.data

            console.log(data)

        } catch (error) {
            return []
        }
    }

    return(
      <div className="overflow-y-hidden w-full h-screen md:h-auto md:min-h-screen md:bg-[var(--light-blue)] md:flex md:flex-col md:items-center md:justify-center lg:justify-start lg:h-auto lg:h-screen">

       <HeaderUsuario/>
      
                  <img  
                      src={logotipoAzul}
                      alt="" 
                      className="hidden md:block md:w-40"
                  />
      
                  <div className="w-full h-screen px-8 flex flex-col md:w-[90%] md:bg-white md:rounded-xl md:h-[50%] md:p-10 md:gap-10 md:shadow-[0_0_50px_rgba(0,0,0,0.25)] lg:h-[80vh] lg:w-[60%]">
                      
                      <div className="flex justify-center w-full">
                          <OutlinedTitle>
                              Socialização
                           </OutlinedTitle>
                       </div>
                  
      
                      <div className="flex flex-col gap-5 mt-5 lg:mt-0">

                        <CheckboxAtividade
                            opcaoSelecionada={opcaoSelecionada}
                            setOpcaoSelecionada={setOpcaoSelecionada}
                        />

                        {opcaoSelecionada === 'personalizada' && (
                            <div className="flex flex-col w-full gap-3">
                              <p className="instrument-sans font-semibold text-lg md:text-2xl">Escreva a proposta de habilidade a ser desenvolvida:</p>
                              <input 
                                  type="text" 
                                  className="
                                      shadow-[0_0_50px_rgba(0,0,0,0.25)] w-full h-16 rounded-lg bg-[#C9C9C9] opacity-30
                                      md:w-[90%] md:h-40 md:self-center md:mr-8     
                                      "
                                      onChange={(e) => {
                                        setComportamento(e.target.value)
                                      }}
                                      
                                  />

                               <OptionPaneMeses
                                    onChange={(e) => {
                                        setValorMeses(e.target.value)
                                      }}
                               />

                            </div>

                            
                        )}

                        {opcaoSelecionada === 'portage' && (
                             <div className="flex flex-col gap-5 lg:">
                                <p className="instrument-sans font-semibold text-lg md:text-2xl">Escolha uma das habilidades ainda não desenvolvidas:</p>
                                <select 
                                    name="" 
                                    id=""
                                    className="shadow-[0_0_20px_rgba(0,0,0,0.25)] p-2 rounded-lg w-full"
                                >
                                    <option value="">1. Observa uma pessoa movimentando-se em seu campo visual.</option>
                                </select>
                             </div>
                        )}

                       
                          
      
                      </div>
      
      
                      <div className="flex flex-col mt-5 justify-items-center-safe w-full gap-3 md:gap-5 md:mt-40 lg:mt-0 md:flex-row-reverse lg:w-full lg:justify-center lg:mt-10">
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