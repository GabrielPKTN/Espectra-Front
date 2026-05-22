import Card from "../components/Card";
import Button from "../components/Button";
import fechar from "../assets/general_photos/icons8-close-48.png";

function CardExclusao({ onConfirm, onCancel }) {

    return (
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">

            <div className="relative bg-white rounded-xl p-10">

                <img
                    src={fechar}
                    alt="Fechar"
                    onClick={onCancel}
                    className="w-10 h-10 cursor-pointer absolute top-2 right-2 transition hover:scale-125"
                />

                <div className="p-6">
                    
                    <p className="text-xl font-semibold mb-6 text-center">
                        Tem certeza que deseja excluir essa atividade?
                    </p>

                    <Button
                        className="w-full mb-3"
                        variantClick="basicClick"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </Button>

                    <Button
                        className="w-full"
                        variantClick="basicClick"
                        onClick={onCancel}
                    >
                        Cancelar
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default CardExclusao;