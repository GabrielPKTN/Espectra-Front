import Button from "../components/Button";
import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import CardTentativa from "../components/CardTentativa";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function HistoricoTentativa() {

    const navigate = useNavigate()

    return (
        //Div da tela
        <div>
            {/* Div da seção do Header */}
            <div className="flex justify-between items-center">
            <ChevronLeft
                //onClick para ir a tela de perifl -> Implementação futura
                className="mt-[18px] ml-[16px] w-8 h-8 text-black cursor-pointer"
                color="#00459C"
            />
                
                <img
                    src={fotoPsicopedagogo}
                    alt="Foto do Psicopedagogo"
                    //onClick para ir a tela de perfil -> Implementação futura
                    className="w-[50px] h-[50px] mt-[18px] mr-[20px] rounded-full"
                />
            </div>

            {/* Div da seção principal da Tela */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-black font-['Inclusive_Sans'] text-[24px] mt-[14px] text-center">
                    9. Estende a mão em direção a um objeto oferecido
                </h1>

                <h2 className="w-full text-left ml-[38px] text-black font-['Instrument_Sans'] text-[22px] font-bold">
                    Tentativas:
                </h2>

                {/* Div dos Cards */}
                <div className="flex flex-col gap-4">
                    <CardTentativa
                        titulo="Atividade realizada com auxílio parcial"
                        descricao="Resultado: Êxito"
                        data="20/03/2026"
                        fundo="bg-[#F9F9F9]"
                    >
                        <Button
                            className="w-[142px] h-[31px] rounded-2x1 transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={() => navigate("/detalhesTentativa")}
                        >
                            Ver detalhes
                        </Button>
                    </CardTentativa>
                
                    <CardTentativa
                        titulo="Atividade realizada com auxílio parcial"
                        descricao="Resultado: Êxito"
                        data="20/03/2026"
                        fundo="bg-[#F9F9F9]"
                    >
                        <Button
                            className="w-[142px] h-[31px] rounded-2x1 transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={() => navigate("/detalhesTentativa")}
                        >
                            Ver detalhes
                        </Button>
                    </CardTentativa>

                    <CardTentativa
                        titulo="Atividade realizada com auxílio parcial"
                        descricao="Resultado: Êxito"
                        data="20/03/2026"
                        fundo="bg-[#F9F9F9]"
                    >
                        <Button
                            className="w-[142px] h-[31px] rounded-2x1 transform-gpu transition-all duration-300 ease-in-out hover:scale-110"
                            variantClick="basicClick"
                            onClick={() => navigate("/detalhesTentativa")}
                        >
                            Ver detalhes
                        </Button>
                    </CardTentativa>
                </div>

                <h2 className="w-full text-left ml-[38px] mt-[18px] text-black font-['Instrument_Sans'] text-[22px] font-bold">
                    Representação gráfica: 
                </h2>


            </div>
        </div>
    )
}

export default HistoricoTentativa;