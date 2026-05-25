import interrogacao from "../assets/general_photos/interrogacao.svg";
import ModalMeses from "../pages/ModalValorMeses";
import { useState } from "react";
import { useEffect } from "react";
import api from "../services/api";

export default function OptionPaneAtividades({onChange}){

    const [atividadesFalse, setAtividadesFalse] = useState([])
    const [modal, setModal] = useState(false)

    const idPaciente = Number(localStorage.getItem('id_paciente'))
    const idHabilidade =  Number(localStorage.getItem('id_habilidade'))
    const token = localStorage.getItem('token')

    async function getAtividadesFalse() {
        try {
            const response = await api.get(
                `v1/espectra/atividade/competencias/${idPaciente}/${idHabilidade}`, {
                    headers: {
                        'x-access-token': token
                    }
                }
            )

            return response.data.items || []

        } catch (error) {
            return []
        }
    }

    useEffect(() => {
        async function carregar() {
            const atividadesFalse = await getAtividadesFalse()
            setAtividadesFalse(atividadesFalse)
        }
        carregar()
    }, [])


    return(
        <div className="flex flex-col gap-3">
                                    
            <p className="
                instrument-sans font-semibold text-lg md:text-2xl
                "
            >
                Escolha uma das habilidades ainda não desenvolvidas:
            </p>

            <div className="flex w-full align-middle gap-1">
                <select 
                    name="" 
                    id="" 
                    className="
                        shadow-[0_0_20px_rgba(0,0,0,0.25)] px-1 w-full rounded-lg h-7 inclusive-sans text-sm 
                        md:text-lg md:h-11
                        lg:h-10 lg:text-xl 
                        "
                        onChange={(e) => onChange(Number(e.target.value))}
                    >
                    {atividadesFalse.map((atividade) => (
                        <option 
                            key={atividade.id_atividade_portage} 
                            value={atividade.id_atividade_portage}
                        >
                            {atividade.numero_questao}. {atividade.comportamento}
                        </option>
                    ))}

                </select>
            </div>

            {modal && (
                <ModalMeses
                    onCancel={() => setModal(false)}
                    onConfirm={() => {
                        setModal(false)
                    }}
                />
            )}

        </div>

    )
    

}