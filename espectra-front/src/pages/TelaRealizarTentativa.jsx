import { ChevronLeft, Tornado } from "lucide-react";
import { CircleUser } from "lucide-react";
import button_quadrado_select from "../assets/general_photos/button_quadrado_select.svg";
import button_quadrado_unselected from "../assets/general_photos/button_quadrado_unselected.svg";
import SecondButton from "../components/SecondButton";
import { useEffect, useState } from "react";
import api from "../services/api";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function TelaRealizarTentativa() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [atividade, setAtividade] = useState(null);

  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [opcaoSimNao, setOpcaoSimNao] = useState(null);
  const [observacao, setObservacao] = useState("");

  const id_atividade = id;
  const id_auxilio = opcaoSelecionada;

  const resultado = opcaoSimNao === "sim";

  const selecaoTipoTentativa = (opcao) => {
    if (opcaoSelecionada === opcao) {
      setOpcaoSelecionada(null);
    } else {
      setOpcaoSelecionada(opcao);
    }
  };

  const selecaoSimNao = (opcao) => {
    if (opcaoSimNao === opcao) {
      setOpcaoSimNao(null);
    } else {
      setOpcaoSimNao(opcao);
    }
  };

  useEffect(() => {
    const buscarAtividade = async () => {
      try {
        const response = await api.get(`v1/espectra/atividade/?id=${id}`);

        setAtividade(response.data);
      } catch (error) {
        toast.error("Erro ao carregar os dados da atividade.");
        console.error(error);
      }
    };

    if (id) buscarAtividade();
  }, [id]);

  const handleTentativa = async (e) => {
    e.preventDefault();

    if (!opcaoSelecionada || !opcaoSimNao) {
      toast.error("Preencha todos os campos antes de salvar");
      return;
    }

    const dadosTentativa = {
      id_auxilio,
      id_atividade,
      resultado,
      observacao,
      data_tentativa: new Date().toISOString(),
    };

    try {
      const response = await api.post("v1/espectra/tentativa", dadosTentativa);

      if (response.status === 200) {
        toast.success("Tentativa registrada com sucesso!");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          `Erro ao salvar tentativa: ${
            error.response.data.message || "Tenta novamente mais tarde."
          }`,
        );
      } else {
        toast.error("Não foi possível conecar ao servidor.");
      }
      console.error("Erro na requisição de cadastro: ", error);
    }
  };

  return (
    // div que carrega todo o conteúdo da tela
    <div className="lg:bg-[#dfedff] lg:overflow-hidden lg:w-screen lg:h-screen">
      {/*HEADER*/}
      <div className="flex flex-row justify-between m-2">
        <ChevronLeft className="primary-color size-12" />

        <CircleUser className=" primary-color size-12" />
      </div>

      {/*MAIN*/}
      <div className="lg:mx-20">
        <div className="mt-6 p-6 lg:bg-white lg:m-10 lg:rounded-4xl">
          <h1 className="text-center text-2xl inclusive-sans lg:px-8 lg:mt-4 lg:text-[24px]">
            {atividade.id}. {atividade.comportamento}
          </h1>

          {/*opções de tipo de realização*/}
          <div className="flex flex-col mt-10 inclusive-sans gap-4 mx-6 lg:mt-5 lg:mx-12">
            <div className="flex flex-row gap-2 text-[20px]">
              <button onClick={() => selecaoTipoTentativa("independente")}>
                <img
                  src={
                    opcaoSelecionada === "independente"
                      ? button_quadrado_select
                      : button_quadrado_unselected
                  }
                  alt={
                    opcaoSelecionada === "independente"
                      ? button_quadrado_select
                      : button_quadrado_unselected
                  }
                />
              </button>
              <p>Realização independente</p>
            </div>
            <div className="flex flex-row gap-2 text-[20px]">
              <button onClick={() => selecaoTipoTentativa("parcial")}>
                <img
                  src={
                    opcaoSelecionada === "parcial"
                      ? button_quadrado_select
                      : button_quadrado_unselected
                  }
                  alt={
                    opcaoSelecionada === "parcial"
                      ? button_quadrado_select
                      : button_quadrado_unselected
                  }
                />
              </button>
              <p>Realização com auxílio parcial</p>
            </div>
            <div className="flex flex-row gap-2 text-[20px]">
              <button onClick={() => selecaoTipoTentativa("total")}>
                <img
                  src={
                    opcaoSelecionada === "total"
                      ? button_quadrado_select
                      : button_quadrado_unselected
                  }
                  alt={
                    opcaoSelecionada === "total"
                      ? button_quadrado_select
                      : button_quadrado_unselected
                  }
                />
              </button>
              <p>Realização com auxilio total</p>
            </div>
          </div>

          {/*Êxito*/}
          <div className="flex flex-col mt-10 gap-4 mx-6 lg:mt-5 lg:mx-12">
            <h2 className="font-bold text-2xl instrument-sans">
              Obteve êxito?
            </h2>

            <div className="inclusive-sans text-[20px] gap-2 flex flex-col">
              <div className="flex flex-row gap-2">
                <button onClick={() => selecaoSimNao("sim")}>
                  <img
                    src={
                      opcaoSimNao === "sim"
                        ? button_quadrado_select
                        : button_quadrado_unselected
                    }
                    alt={
                      opcaoSimNao === "sim"
                        ? button_quadrado_select
                        : button_quadrado_unselected
                    }
                  />
                </button>
                <p>Sim</p>
              </div>

              <div className="flex flex-row gap-2">
                <button onClick={() => selecaoSimNao("nao")}>
                  <img
                    src={
                      opcaoSimNao === "nao"
                        ? button_quadrado_select
                        : button_quadrado_unselected
                    }
                    alt={
                      opcaoSimNao === "nao"
                        ? button_quadrado_select
                        : button_quadrado_unselected
                    }
                  />
                </button>
                <p>Não</p>
              </div>
            </div>
          </div>

          {/*Observação*/}
          <div className="flex flex-col mt-10 gap-3 mx-6 md:mt-16 lg:mt-6">
            <h2 className="font-bold text-2xl instrument-sans">
              Alguma observação?
            </h2>

            <textarea
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
              type="text"
              className="h-25 p-3 w-full border-[0.2px] border-[#d5d5d5] bg-gray-100 shadow-xl rounded-2xl md:h-58 lg:h-30"
            />
          </div>

          {/*Botoes. Necessário realizar o onClick*/}
          <div className="flex flex-col items-center justify-center mt-6 gap-3 lg:flex-row md:mt-32 lg:mt-4">
            <SecondButton
              onClick={handleTentativa}
              variantClick="firstButton"
              className="lg:order-2"
            >
              Salvar resposta
            </SecondButton>
            <SecondButton variantClick="secondButton">Cancelar</SecondButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaRealizarTentativa;
