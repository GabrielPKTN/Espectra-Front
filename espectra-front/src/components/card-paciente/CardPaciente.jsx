import { useEffect, useMemo } from "react";
import ContainerPacientePhoto from "./ContainerPacientePhoto"
import LabelInfoCard from "./LabelInfoCard"
import { useNavigate } from "react-router-dom"

function CardPaciente(props) {

    console.log(props)

    const navigate = useNavigate()

    return <div key={props.id} data-key={props.id} className="
    bg-white shadow-lg w-[90%] h-full max-h-35 justify-between relative items-center rounded-3xl p-2 flex border-2 border-(--bg-primary-color) md:w-full">

        <ContainerPacientePhoto foto={props.foto} />
        <div className="flex flex-col w-full justify-center">
            <span className="
            text-(--bg-primary-color) font-instrument-sans font-bold w-full text-xl p-1
            ">{props.nome}</span>
            <div className="p-1 flex justify-start flex-row h-auto gap-1 flex-wrap">
                <LabelInfoCard info={`${props.idade} ANOS`} ></LabelInfoCard>
                <LabelInfoCard info={props.cpf} ></LabelInfoCard>
                <LabelInfoCard info={props.serie_escolar} ></LabelInfoCard>
                <LabelInfoCard info={Array.isArray(props.diagnostico_breve)
                    ? props.diagnostico_breve
                        .map(diag => diag.sigla)
                        .join(", ")
                    : props.diagnostico_breve} ></LabelInfoCard>
                <LabelInfoCard info={props.grau_suporte} ></LabelInfoCard>
            </div>
        </div>
        <div onClick={(() => navigate(`/perfil-paciente/${targetClick(event.target)}`))} className="cursor-pointer absolute w-full h-full left-0 right-0 top-0 bottom-0 rounded-3xl z-2"></div>
    </div>

}

const targetClick = (cardClicado) => {

    const pai = cardClicado.parentElement
    return pai.dataset.key

}

export default CardPaciente