import ContainerUserPhoto from "./ContainerUserPhoto"

function CardPaciente(props) {
    
    return <div className="bg-card shadow w-full rounded-3xl p-4 flex border border-(--bg-primary-color)">

        <ContainerUserPhoto size="7"/>
        <div className="flex flex-col justify-center w-full">
            <span className="text-(--bg-primary-color) size font-semibold w-full text-center text-md text-xl">{props.nome}</span>
            <div className="flex">
                <p>{props.idade}</p>
            </div>
        </div>

    </div>

}

export default CardPaciente