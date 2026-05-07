import FotoCard from "../../assets/general_photos/mario_photo.png"

function ContainerPacientePhoto() {

    return <div className={`
    border border-(--bg-primary-color) shrink-0 rounded-[50%] mx-2 size-15 overflow-hidden
    `}>
        <img src={FotoCard} alt="user photo" className="object-cover w-full h-full" />
    </div>

}

export default ContainerPacientePhoto