import { ChevronLeft } from "lucide-react";
import { CircleUser } from 'lucide-react';
import button_quadrado_select from "../assets/general_photos/button_quadrado_select.svg";
import button_quadrado_unselected from "../assets/general_photos/button_quadrado_unselected.svg";
function TelaRealizarTentativa(){
    return (
        // div que carrega todo o conteúdo da tela
        <div>
            {/*HEADER*/}
            <div className="flex flex-row justify-between m-4">
                <ChevronLeft
                    className="primary-color size-12"/>
                
                <CircleUser
                    className=" primary-color size-12"/>
            </div>

            {/*MAIN*/}
            <div className="mt-6 p-6">
                <h1 className="text-center text-2xl inclusive-sans">
                    1. Texto da atividade Texto da atividade Texto da atividade Texto da atividade Texto da atividade 
                </h1>

                {/*opções de tipo de realização*/}
                <div className="flex flex-col mt-10 inclusive-sans gap-4 mx-6">
                    <div className="flex flex-row gap-2 text-[20px]">
                        <img src={button_quadrado_unselected} alt="botao nao selecionado" />
                        <p>Realização independente</p>
                    </div>
                    <div className="flex flex-row gap-2 text-[20px]">
                        <img src={button_quadrado_unselected} alt="botao nao selecionado" />
                        <p>Realização com auxílio parcial</p>
                    </div>
                    <div className="flex flex-row gap-2 text-[20px]">
                        <img src={button_quadrado_unselected} alt="botao nao selecionado" />
                        <p>Realização com auxilio total</p>
                    </div>
                </div>

                {/*Êxito*/}
                <div className="flex flex-col mt-10 gap-4 mx-6">
                        <h2 className="font-bold text-2xl instrument-sans">
                            Obteve êxito?
                        </h2>

                        <div className="inclusive-sans text-[20px] gap-2 flex flex-col">
                            <div className="flex flex-row gap-2">
                                <img src={button_quadrado_unselected} alt="quadrado" />
                                <p>Sim</p>
                            </div>

                            <div className="flex flex-row gap-2">
                                <img src={button_quadrado_unselected} alt="quadrado" />
                                 <p>Não</p>
                            </div>
                        </div>
                </div>

                {/*Observação*/}
                <div className="flex flex-col mt-10 gap-3 mx-6">
                    <h2 className="font-bold text-2xl instrument-sans">
                        Alguma observção?
                    </h2>

                    <input type="text" className="h-25 w-full border-[0.2px] border-[#d5d5d5] bg-gray-100 shadow-xl rounded-2xl"/>
                </div>

                {/*Botoes. Componentizar depois*/}
                <div className="flex flex-col items-center justify-center mt-6">
                    <button className="bg-(--bg-secondary-color) text-white instrument-sans font-bold h-10 w-80 rounded-2xl">
                        Salvar resposta
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TelaRealizarTentativa;