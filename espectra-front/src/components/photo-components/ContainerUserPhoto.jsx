import { CircleUser } from 'lucide-react'
import { useNavigate } from "react-router-dom"

function ContainerUserPhoto(props) {

    const navigate = useNavigate()

    if (props.foto == null) {

        return <div className={`
        shrink-0 rounded-[50%] mx-2 size-10 overflow-hidden cursor-pointer md:size-16
        `}>
            <CircleUser onClick={() => navigate(`/perfil/${props.id}`)} className="object-cover w-full h-full text-(--bg-primary-color)" />
        </div>

    } else {

        return <div onClick={() => navigate(`/perfil/${props.id}`)} className={`
        border border-(--bg-primary-color) rounded-[50%] size-10 overflow-hidden cursor-pointer md:size-16
        `}>
            <img src={props.foto} alt="user photo" className="object-cover w-full h-full" />
        </div>

    }

}

export default ContainerUserPhoto