import { CircleUser } from 'lucide-react'

function ContainerUserPhoto(props) {

    if (props.foto == null) {

        return <div className={`
        shrink-0 rounded-[50%] mx-2 size-10 overflow-hidden md:size-16
        `}>
            <CircleUser className="object-cover w-full h-full text-(--bg-primary-color)" />
        </div>

    } else {

        return <div className={`
        border border-(--bg-primary-color) rounded-[50%] size-10 overflow-hidden md:size-16
        `}>
            <img src={props.foto} alt="user photo" className="object-cover w-full h-full" />
        </div>

    }

}

export default ContainerUserPhoto