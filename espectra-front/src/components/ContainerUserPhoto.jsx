import PerfilFoto from "../assets/general_photos/larissa-photo.png"

function ContainerUserPhoto(props) {

    return <div className={`border border-(--bg-primary-color) rounded-[50%] size-${props.size} overflow-hidden`}>
        <img src={PerfilFoto} alt="user photo" className="object-cover w-full h-full" />
    </div>

}

export default ContainerUserPhoto