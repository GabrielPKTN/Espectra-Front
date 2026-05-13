import Button from "../components/Button";
import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import CardTentativa from "../components/CardTentativa";
import GraficoTentativas from "../components/GraficoTentativas";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { CircleX } from "lucide-react";
import { useState } from "react";

function HistoricoTentativa() {

    const navigate = useNavigate()

    const [abrirModal, setAbrirModal] = useState(false)

    function fechar(){
        setAbrirModal(false)
    }

    return (

        <>
        <div>
            {/* Div da seção do Header */}
            <div className="flex justify-between items-center px-4 lg:px-10">
            <ChevronLeft
                //onClick para ir retornar uma tela -> Implementação futura
                className="mt-[18px] ml-[16px] w-8 h-8 text-black cursor-pointer transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                color="#00459C"
            />
                
                <img
                    src={fotoPsicopedagogo}
                    alt="Foto do Psicopedagogo"
                    //onClick para ir a tela de perfil -> Implementação futura
                    className="w-[50px] h-[50px] mt-[18px] mr-[20px] rounded-full md:hidden transform-gpu transition-all duration-300 ease-in-out hover:scale-110 border-[#4285F4] border-2"
                />

                <h1 className="hidden md:block text-[38px] text-[#00459C] text-center font-bold w-full mt-6">
                    Histórico de tentativas
                </h1>

                <img 
                    src={logo} 
                    alt="Logo Espectra"
                    className="hidden lg:block w-[80px]"
                    h-auto 
                />
            </div>

            {/* Div da seção principal da Tela */}
            <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-center gap-10 mt-6 px-4">
                <div className="md:w-[90%] md:max-w-[700px] md:bg-[#DFEDFF] md:rounded-2xl md:py-4 md:px-6 mt-[14px] md:shadow-md">
                    <h1 className="text-black font-['Inclusive_Sans'] text-[24px] mt-[14px] text-center">
                    9. Estende a mão em direção a um objeto oferecido
                </h1>
                </div>
                

                <h2 className="w-full text-left ml-[38px] text-black font-['Instrument_Sans'] text-[22px] font-bold md:hidden">
                    Tentativas:
                </h2>

                {/* Div dos Cards */}
                <div className="flex flex-col gap-4 md:bg-[#FFFFFF] md:w-[90%] md:max-w-[750px] md:p-6 md:rounded-2xl md:shadow-[0px_0px_12px_rgba(0,0,0,0.40)] md:mt-6">
                    <CardTentativa
                        titulo="Atividade realizada com auxílio parcial"
                        descricao="Resultado: "
                        resultado="Êxito"
                        data="20/03/2026"
                        fundo="bg-[#F9F9F9]"
                    >
                        <Button
                            className="w-[142px] h-[31px] rounded-2x1 transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={() => setAbrirModal(true)}
                        >
                            Ver detalhes
                        </Button>
                    </CardTentativa>
                
                    <CardTentativa
                        titulo="Atividade realizada com auxílio parcial"
                        descricao="Resultado: "
                        resultado="Êxito"
                        data="20/03/2026"
                        fundo="bg-[#F9F9F9]"
                    >
                        <Button
                            className="w-[142px] h-[31px] rounded-2x1 transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={() => setAbrirModal(true)}
                        >
                            Ver detalhes
                        </Button>
                    </CardTentativa>

                    <CardTentativa
                        titulo="Atividade realizada com auxílio parcial"
                        descricao="Resultado: "
                        resultado="Êxito"
                        data="20/03/2026"
                        fundo="bg-[#F9F9F9]"
                    >
                        <Button
                            className="w-[142px] h-[31px] rounded-2x1 transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={() => setAbrirModal(true)}
                        >
                            Ver detalhes
                        </Button>
                    </CardTentativa>
                </div>

                <h2 className="w-full text-left ml-[38px] mt-[18px] text-black font-['Instrument_Sans'] text-[22px] font-bold">
                    Representação gráfica: 
                </h2>

                <GraficoTentativas/>
            </div>
        </div>

        {
            abrirModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
                    <CardTentativa
                        className="w-[374px] h-[680px] border-[#C9C9C9] border-3 p-5"
                        fundo="bg-[#F9F9F9]"
                    >   
                        {/* Div do cabeçalho */}
                        <div className="absolute top-[8px] right-[8px]">
                            <CircleX
                            className="h-[26px] w-[26px] cursor-pointer transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            color="#EA1212"
                            onClick={fechar}
                        />
                        </div>
                        
                        {/* Div da seção principal */}
                        <div className="relative w-full flex flex-col items-center mt-4">
                            <h1
                                className="absolute text-[40px] font-black text-transparent stroke-text"
                            >
                                Socialização
                            </h1>

                            <h1
                                className="relative translate-x-[8px] translate-y-[6px] text-[40px] font-black text-[#89C771]"
                            >
                                Socialização
                            </h1> 
                            
                            <div className="mt-4">
                                <div className="mt-1 w-[121px] h-[39px] bg-[#D8EAD1] rounded-2xl flex justify-center items-center shadow-md">
                                    <p className="text-center font-bold">
                                        20/03/2026
                                    </p>
                                </div>
                            </div>

                            <h1 className="w-full text-center mt-6 font-['Instrument_Sans'] font-semibold text-[20px]">
                                9. Estende a mão em direção a um objeto oferecido
                            </h1>

                            <div className="mt-4">
                                <p className="text-center font-['Instrument_Sans'] text-[20px]">
                                    Resultado:
                                </p>

                                <p className="text-center font-['Instrument_Sans'] text-[#00B521] font-bold text-[20px]">
                                    Êxito
                                </p>
                            </div>

                            <p className="mt-4 text-center font-['Instrument_Sans'] text-[20px] italic">
                                Atividade realizada com auxílio total do profissional
                            </p>

                            <div className="mt-6">
                                <p className="font-['Instrument_Sans'] font-bold text-[20px]">
                                    Observações: 
                                </p>

                                <div
                                    className="bg-[#E9E9E9] w-[325px] h-[173px] rounded-2xl mt-2"
                                >
                                    <p className="font-['Inclusibe_Sans'] ml-4 mt-3 text-[16px]">
                                        Em casos de extrema urgência, utilize determinado método:
                                        ......
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardTentativa>
                </div>
            )
        }

        </>
    )
}

export default HistoricoTentativa;