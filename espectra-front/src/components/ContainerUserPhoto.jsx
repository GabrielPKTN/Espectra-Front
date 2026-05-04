import PerfilFoto from "../assets/general_photos/larissa-photo.png"

function ContainerUserPhoto() {

    return <div className="border border-(--bg-primary-color) rounded-[50%] w-10 h-10 overflow-hidden">
        <img src={PerfilFoto} alt="user photo" className="object-cover w-full h-full" />
    </div>

}

export default ContainerUserPhoto