import Button from "../components/Button";
import fotoPsicopedagogo from "../assets/general_photos/fotoPsicopedagogo.png";
import logo from "../assets/logotipos/logo.png";
import CardTentativa from "../components/CardTentativa";
import GraficoTentativas from "../components/GraficoTentativas";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { CircleX } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Logotipo from "../components/logotipo";
import ContainerUserPhoto from "../components/photo-components/ContainerUserPhoto";
import BotaoVoltar from "../components/BotaoVoltar";
import SecondButton from "../components/SecondButton";

function HistoricoTentativa() {
  const navigate = useNavigate();

  const [abrirModal, setAbrirModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const [nomeAtividade, setNomeAtividade] = useState("");

  const [tentativas, setTentativas] = useState([]);
  const [tentativaSelecionada, setTentativaSelecionada] = useState(null);

  const { id_atividade } = useParams();

  const token = localStorage.getItem("token");

  const homeDataString = localStorage.getItem("home");
  const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;
  const fotoUsuarioLogado = homeDataObject?.items?.foto || null;
  const idUsuarioLogado = homeDataObject?.items?.id || null;

  function fechar() {
    setAbrirModal(false);
  }

  function formatarData(data) {
    if (!data) return "";
    const [ano, mes, dia] = data.split("T")[0].split("-");

    return new Date(Number(ano), Number(mes) - 1, Number(dia)).toLocaleDateString("pt-BR");
  }

  function corHabilidade(nomeHabilidade) {
    switch (nomeHabilidade) {
      case "Socialização":
        return "#A2E289";

      case "Linguagem":
        return "#FFC87B";

      case "Cognição":
        return "#71AFFF";

      case "Auto-Cuidados":
        return "#CC9DFF";

      case "Desenvolvimento motor":
        return "#D9D9D9";

      default:
        return "#00459C";
    }
  }

  const dadosGrafico = tentativas.map((tentativa) => {
    let valor = 1;
    let color = "#FF2D2D";

    if (tentativa.auxilio.includes("parcial")) {
      valor = 2;
      color = "#FAE938";
    }

    if (tentativa.auxilio.includes("Independente")) {
      valor = 3;
      color = "#A2E289";
    }

    return {
      data: formatarData(tentativa.data_tentativa),
      valor,
      color,
    };
  });

  async function buscarTentativas(idAtividade) {
    try {
      setLoading(true);
      setErro(null);

      if (!token) {
        setErro("Token não encontrado!");
        return;
      }

      const response = await api.get(
        `/v1/espectra/tentativa/${idAtividade}`,
        {
          headers: { "x-access-token": token },
        },
      );

      const listaTentativas = response.data.items || [];
      setTentativas(listaTentativas);

      console.log(listaTentativas)

      if (listaTentativas.length > 0) {
        setNomeAtividade(listaTentativas[0].comportamento);
      } else {
        setNomeAtividade("Nenhuma tentativa registrada para esta atividade")
      }
    } catch (error) {
      console.log(error);
      setErro("Erro ao buscar tentativa");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id_atividade) {
      buscarTentativas(id_atividade);
    }

  }, [id_atividade]);

  return (
    <>

      <div className="flex flex-col h-screen w-screen">
        {/* Div da seção do Header */}
        <div className="flex justify-between items-center m-4 lg:m-6 lg:px-4">
          <BotaoVoltar color="blueColor" onClick={() => navigate("/atividades/")} />

          <ContainerUserPhoto foto={fotoUsuarioLogado} id={idUsuarioLogado} />
        </div>

        <div>
          <h1 className="hidden md:block text-[38px] text-[#00459C] instrument-sans text-center font-bold w-full mt-6">
            Histórico de tentativas
          </h1>
        </div>

        {/* Div da seção principal da Tela */}
        <div className="flex flex-col justify-center items-center gap-10 mt-6 px-4">
          <div className="md:w-[90%] md:max-w-175 md:bg-[#DFEDFF] md:rounded-2xl md:py-4 md:px-6 mt-3.5 md:shadow-md">
            <h1 className="text-black inclusive-sans text-[24px] text-center">
              {loading ? "Carregando atividade..." : nomeAtividade}
            </h1>
          </div>

          {/* Container das colunas */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <h2 className="w-full text-left ml-9.5 text-black instrument-sans text-[22px] font-bold md:hidden">
              Tentativas:
            </h2>

            {/* Div dos Cards */}
            <div className="flex flex-col w-full gap-4 -mt-4 md:bg-[#FFFFFF] md:w-[90%] overflow-y-auto md:rounded-2xl md:p-6 md:shadow-[0px_0px_12px_rgba(0,0,0,0.40)] md:mt-6 lg:w-1/2 h-125">

              {loading && <p>Carregando tentativas...</p>}

              {!loading && tentativas.length === 0 && (
                <p className="text-center text-gray-400 instrument-sans italic">Nenhuma atividade registrada</p>
              )}

              {tentativas.map((tentativa) => (
                <CardTentativa
                  key={tentativa.id_tentativa}
                  titulo={`Atividade realizada com auxílio ${tentativa.auxilio}`}
                  descricao="Resultado: "
                  resultado={tentativa.resultado ? "Êxito" : "Falha"}
                  data={formatarData(tentativa?.data_tentativa)}
                  fundo="bg-[#F9F9F9]"
                  className="w-full mb-2"
                >
                  <SecondButton
                    onClick={() => {
                      setTentativaSelecionada(tentativa);
                      setAbrirModal(true);
                    }}
                    variantClick="firstButton"
                    className="lg:w-45 rounded-full"
                  >
                    Ver detalhes
                  </SecondButton>

                </CardTentativa>
              ))}
            </div>

            {/* Container -> Lado direito */}
            <div className="w-full lg:w-1/2">
              <h2 className="w-full text-left ml-[38px] mt-[18px] text-black font-['Instrument_Sans'] text-[22px] font-bold">
                Representação gráfica:
              </h2>

              {dadosGrafico.length > 0 && (
                <GraficoTentativas data={dadosGrafico} />
              )}

            </div>
          </div>
        </div>
      </div>

      {abrirModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <CardTentativa
            className="w-[374px] h-[680px] border-[#C9C9C9] border-3 p-5 lg:w-[1200px]"
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
                style={{
                  WebkitTextStrokeColor: corHabilidade(
                    tentativaSelecionada?.habilidade?.nome_habilidade,
                  ),
                }}
              >
                {tentativaSelecionada?.habilidade?.nome_habilidade}
              </h1>

              <h1
                className="relative translate-x-[8px] translate-y-[6px] text-[40px] font-black"
                style={{
                  color: corHabilidade(
                    tentativaSelecionada?.habilidade?.nome_habilidade,
                  ),
                }}
              >
                {tentativaSelecionada?.habilidade?.nome_habilidade}
              </h1>

              <div className="mt-4">
                <div className="mt-1 w-[121px] h-[39px] bg-[#D8EAD1] rounded-2xl flex justify-center items-center shadow-md lg:w-[181px] ">
                  <p className="text-center font-bold lg:text-[24px]">
                    {formatarData(tentativaSelecionada?.data_tentativa)}
                  </p>
                </div>
              </div>

              <h1 className="w-full text-center mt-6 font-['Instrument_Sans'] font-semibold text-[20px] lg:text-[30px]">
                {tentativaSelecionada?.comportamento}
              </h1>

              <div className="mt-4">
                <p className="text-center font-['Instrument_Sans'] text-[20px] lg:text-[32px]">
                  Resultado:
                </p>

                <p
                  className={`text-center font-['Instrument_Sans'] font-bold text-[20px] lg:text-[28px]`}
                  style={{
                    color: tentativaSelecionada?.resultado
                      ? "#00B521"
                      : "#EA1212",
                  }}
                >
                  {tentativaSelecionada?.resultado ? "Êxito" : "Falha"}
                </p>
              </div>

              <p className="mt-4 text-center font-['Instrument_Sans'] text-[20px] italic lg:text-[24px]">
                Atividade realizada com auxílio {tentativaSelecionada?.auxilio}
              </p>

              <div className="mt-6 w-full">
                <p className="font-['Instrument_Sans'] font-bold text-[20px] lg:text-[28px] lg:w-full lg:text-left">
                  Observações:
                </p>

                <div className="bg-[#E9E9E9] w-[325px] h-[173px] rounded-2xl mt-2 lg:w-[1155px]">
                  <p className="font-['Inclusive_Sans'] ml-4 mt-3 text-[16px]">
                    {tentativaSelecionada?.observacao || "Sem observações"}
                  </p>
                </div>
              </div>
            </div>
          </CardTentativa>
        </div>
      )}
    </>
  );
}

export default HistoricoTentativa;
