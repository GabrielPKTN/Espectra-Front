import ContainerPacientePhoto from "./photo-components/ContainerPacientePhoto"

function CardPaciente(props) {
    
    console.log(props)

    return <div className="bg-card shadow w-full justify-between rounded-3xl p-4 flex border border-(--bg-primary-color)">

        <ContainerPacientePhoto/>
        <div className="flex flex-col w-full justify-center">
            <span className="text-(--bg-primary-color) size font-semibold w-full text-center text-md text-xl">{props.nome}</span>
            <div className="flex">
                <p>{props.idade} ANOS</p>
                <p>{props.numero_registro}</p>
                <p>{props.serie_escolar}</p>
                <p>{props.diagnostico}</p>
                <p>{props.grau_suporte}</p>
            </div>
        </div>

    </div>

}

export default CardPaciente