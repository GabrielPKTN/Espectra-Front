import Card from "../components/Card";
import Button from "../components/Button";
import fechar from "../assets/general_photos/icons8-close-48.png";
import { useState } from "react";

function CardExclusao(){

    function confirmar(){
        alert("Atividade excluída com sucesso!")
    }

    function cancelar(){
        setAberto(false)
    }

    const [aberto, setAberto] = useState(true)

    return (
        <div className="w-screen h-screen backdrop-blur-sm bg-black/30 flex justify-center items-center"> 
            <div className="relative">
                {
                aberto && (
                    <Card 
                        titulo="Tem certeza que deseja excluir essa atividade?"
                        fundo="bg-[#F9F9F9]"
                        corTitulo="text-black font-['Inclusive_Sans'] text-[36px]"
                        rowButtons={false}
                    >

                        <img
                            src={fechar}
                            alt="Fechar"
                            onClick={cancelar}
                            className="w-10 h-10 cursos-pointer absolute top-2 right-2 transition duration-300 hover:scale-125"
                        />

                        <Button className="w-full transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={confirmar}
                        >
                            Confirmar
                        </Button>

                        <Button
                            className="w-full transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={cancelar}
                        >
                            Cancelar
                        </Button>
                    </Card>
                    )
                }
                 
            </div>
        </div>
    )
}

export default CardExclusao;