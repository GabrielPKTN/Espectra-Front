import arrow from "../assets/general_photos/arrow.svg";
import userPhoto from "../assets/general_photos/userPhoto.png";

export default function HeaderUsuario(){
    return(
        <header className="flex items-center justify-between p-4 md:hidden">
       
            <img src={arrow} alt="" />
        

            <img src={userPhoto} alt=""/>
        </header>
    )
}