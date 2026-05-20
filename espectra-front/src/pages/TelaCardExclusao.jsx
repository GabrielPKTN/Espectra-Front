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
        //Div que faz o background da tela
        <div className="w-screen h-screen backdrop-blur-sm bg-black/30 flex justify-center items-center"> 

        {/* Div que guarda o card */}        
            <div className="relative">
                {
                aberto && (
                    <Card 
                        titulo="Tem certeza que deseja excluir essa atividade?"
                        fundo="bg-[#F9F9F9]"
                        corTitulo="text-black text-[36px] font-inclusive-sans"
                        rowButtons={false}
                        className="md:w-[700px] md:h-[400px]"
                    >

                        <img
                            src={fechar}
                            alt="Fechar"
                            onClick={cancelar}
                            className="w-10 h-10 cursos-pointer absolute top-2 right-2 transition duration-300 hover:scale-125"
                        />

                        <Button className="w-full transform-gpu transition-all duration-300 ease-in-out hover:scale-110 md:w-full md:mt-7 md:h-[60px]"
                            variantClick="basicClick"
                            onClick={confirmar}
                        >
                            Confirmar
                        </Button>

                        <Button
                            className="w-full transform-gpu transition-all duration-300 ease-in-out hover:scale-110 md:w-full md:h-[60px]"
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