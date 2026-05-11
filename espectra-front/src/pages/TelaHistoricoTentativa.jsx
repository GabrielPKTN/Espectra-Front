import Card from "../components/Card";
import Button from "../components/Button";
import voltar from "../assets/general_photos/rectangle.png";
import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";

function HistoricoTentativa() {

    return (
        //Div da tela
        <div>
            {/* Div da seção do Header */}
            <div className="flex justify-between items-center">
                <img
                    src={voltar}
                    alt="Voltar"
                    //onClick para voltar a tela anterior -> Implementação futura
                    className="mt-[18px] ml-[20px]"
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

                <Card></Card>

                <Card></Card>

                <Card></Card>
            </div>
        </div>
    )
}

export default HistoricoTentativa;