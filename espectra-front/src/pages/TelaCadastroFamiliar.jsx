import InputDefault from "../components/InputDefault"
import antonioPhoto from "../assets/general_photos/antonio_photo.png"
import logo from "../assets/logotipos/logo.png"
import defaultPhoto from "../assets/general_photos/default-photo.png"


function TelaCadastroFamiliar(){
    return(
        <div className="flex flex-col h-screen w-full gap-5">

            <header className="flex items-center justify-between p-5">
                <img src={logo} alt=""  className="w-15"/>
                <img src={antonioPhoto} alt=""  className="rounded-full"/>
            </header>

            <div className="flex flex-col items-center gap-25">
                <img src={defaultPhoto} alt=""  className="w-25"/>

                <div>
                    <InputDefault/>
                </div>
            </div>
        </div>
    )
}

export default TelaCadastroFamiliar