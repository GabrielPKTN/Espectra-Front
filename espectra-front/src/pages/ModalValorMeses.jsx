import Card from "../components/Card";
import Button from "../components/Button";
import fechar from "../assets/general_photos/icons8-close-48.png";
import light from "../assets/general_photos/Light.svg"

function ModalMeses({ onConfirm, onCancel }) {

    return (
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">

            <div className="relative bg-white rounded-xl p-10 w-[80%] md:w-[60%] h-[40%] md:h-auto">

                <img
                    src={fechar}
                    alt="Fechar"
                    onClick={onCancel}
                    className="w-10 h-10 cursor-pointer absolute top-2 right-2 transition hover:scale-125 lg:size-12"
                />

                <div className="p-6 flex flex-col items-center gap-5">

                    <img src={light} alt="" className="flex self-center lg:w-14"/>
                    
                    <p className="text-md md:text-xl lg:text-3xl text-center font-inclusive-sans">
                    Esse será a quantidade em meses que será adicionado a idade do paciente assim que essa atividade ser concluída.
                    </p>

                    

                </div>

            </div>

        </div>
    )
}

export default ModalMeses;