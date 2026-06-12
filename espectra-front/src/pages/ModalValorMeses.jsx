import Card from "../components/Card";
import Button from "../components/Button";
import fechar from "../assets/general_photos/icons8-close-48.png";
import light from "../assets/general_photos/Light.svg"

function ModalMeses({ onConfirm, onCancel }) {

    return (
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">

            <div className="relative bg-white rounded-xl p-6 w-[85%] md:w-[70%] h-[40%] max-w-md md:h-auto">

                <img
                    src={fechar}
                    alt="Fechar"
                    onClick={onCancel}
                    className="w-10 h-10 cursor-pointer absolute top-2 right-2 transition hover:scale-125 lg:size-12"
                />

                <div className="p-6 flex flex-col items-center gap-2">

                    <img src={light} alt="" className="flex self-center lg:w-14"/>
                    
                    <p className="text-md md:text-xl lg:text-3xl text-center font-inclusive-sans">
                    Os meses informados representam o avanço estimado no desenvolvimento do paciente ao concluir esta atividade.
                    </p>                    

                </div>

            </div>

        </div>
    )
}

export default ModalMeses;