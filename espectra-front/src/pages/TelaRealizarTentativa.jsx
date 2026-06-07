import SecondButton from "../components/SecondButton";
import { useEffect, useState } from "react";
import api from "../services/api";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import NavItem from "../components/NavItem";
import BotaoVoltar from "../components/BotaoVoltar";
import ContainerUserPhoto from "../components/photo-components/ContainerUserPhoto";

function TelaRealizarTentativa() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [atividade, setAtividade] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [opcaoSimNao, setOpcaoSimNao] = useState(null);
  const [observacao, setObservacao] = useState("");

  const id_atividade = id;
  const id_auxilio = opcaoSelecionada;
  const id_usuario = localStorage.getItem("id_usuario");
  const token = localStorage.getItem("token");

  const resultado = opcaoSimNao === 1 ? 1 : 0;

  const selecaoTipoTentativa = (opcao) => {
    setOpcaoSelecionada(opcaoSelecionada === opcao ? null : opcao);
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
        const response = await api.get(
          `/v1/espectra/atividade?id_atividade=${id_atividade}&id_usuario=${id_usuario}`,
          {
            headers: {
              "x-access-token": token
            },
          }
        );

        const dadosAtividade = response.data.items;

        if (dadosAtividade) {

          setAtividade(dadosAtividade);

        } else {

          toast.error("Atividade não encontrada.");
          navigate(-1);

        }

      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar os dados da atividade.");
      }
    };

    if (!token) {
      toast.error("Usuário não autenticado, faça login novamente")
      navigate("/login")
      return
    }

    if (!id_atividade || !id_usuario) {
      toast.error("Dados da atividade inválidos")
      navigate(-1)
      return
    }

    buscarAtividade()


  }, []);

  const handleTentativa = async (e) => {
    e.preventDefault();

    if (opcaoSelecionada === null || opcaoSimNao === null) {
      toast.error("Preencha todos os campos antes de salvar");
      return;
    }

    const dataFormatada = new Date().toISOString().split("T")[0];

    const dadosTentativa = {
      id_auxilio: Number(id_auxilio),
      id_atividade: Number(id_atividade),
      id_usuario: Number(id_usuario),
      resultado: resultado,
      observacao: observacao || null,
      data_tentativa: dataFormatada,
    };

    try {
      console.log(dadosTentativa)

      const response = await api.post("v1/espectra/tentativa", dadosTentativa, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token
        },
      });

      if (response.status === 201 || response.status === 200) {
        toast.success("Tentativa registrada com sucesso!");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          `Erro ao salvar tentativa: ${error.response.data.message || "Tenta novamente mais tarde."
          }`,
        );
      } else {
        toast.error("Não foi possível conecar ao servidor.");
      }
      console.error("Erro na requisição de cadastro: ", error);
    }
  };

  async function getUsuarioById() {
    const token = localStorage.getItem("token");

    try {
      const response = await api.get(`/v1/espectra/usuario/${id_usuario}`, {
        headers: {
          "x-access-token": token,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Usuário não encontrado!");
      return null;
    }
  }

  const handlePerfilClick = async () => {
    const perfilUsuario = await getUsuarioById();

    if (!perfilUsuario) {
      toast.error("Erro ao entrar no perfil do usuário!");
    }

    navigate(`/perfil/${id_usuario}`);
  };

  if (!atividade) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#dfedff]">
        <p className="text-xl font-semibold text-blue-600">
          Carregando dados da atividade...
        </p>
      </div>
    );
  }

  const homeDataString = localStorage.getItem("home");
  const homeDataObject = homeDataString ? JSON.parse(homeDataString) : null;
  const fotoUsuarioLogado = homeDataObject?.items?.foto || null;

  return (
    // div que carrega todo o conteúdo da tela
    <div className="lg:bg-[#dfedff] lg:overflow-hidden lg:w-screen lg:h-screen">
      {/*HEADER*/}
      <div className="flex flex-row justify-between m-4">
          <BotaoVoltar
            color="blueColor"
            onClick={() => navigate(-1)}
          />

        <ContainerUserPhoto 
          foto={fotoUsuarioLogado} id={id_usuario}/>
      </div>

      {/*MAIN*/}
      <div className="lg:mx-20">
        <div className="mt-6 p-6 lg:bg-white lg:m-10 lg:rounded-4xl">
          <h1 className="text-center text-2xl inclusive-sans lg:px-8 lg:mt-4 lg:text-[24px]">
            {atividade.id_atividade}. {atividade.comportamento}
          </h1>

          {/*opções de tipo de realização*/}
          <div className="flex flex-col mt-10 inclusive-sans gap-4 mx-6 lg:mt-5 lg:mx-12">
            <div className="flex flex-row gap-2 text-[20px] items-center">
              <input
                type="checkbox"
                checked={opcaoSelecionada === 1}
                onChange={() => selecaoTipoTentativa(1)}
                className="size-5 md:size-6"
              />
              <p>Realização independente</p>
            </div>
            <div className="flex flex-row gap-2 text-[20px] items-center">
              <input
                type="checkbox"
                checked={opcaoSelecionada === 2}
                onChange={() => selecaoTipoTentativa(2)}
                className="size-5 md:size-6"
              />
              <p>Realização com auxílio parcial</p>
            </div>
            <div className="flex flex-row gap-2 text-[20px] items-center">
              <input
                type="checkbox"
                checked={opcaoSelecionada === 3}
                onChange={() => selecaoTipoTentativa(3)}
                className="size-5 md:size-6"
              />
              <p>Realização com auxilio total</p>
            </div>
          </div>

          {/*Êxito*/}
          <div className="flex flex-col mt-10 gap-4 mx-6 lg:mt-5 lg:mx-12">
            <h2 className="font-bold text-2xl instrument-sans">
              Obteve êxito?
            </h2>

            <div className="inclusive-sans text-[20px] gap-2 flex flex-col ">
              <div className="flex flex-row gap-2 items-center">
                <input
                  type="checkbox"
                  checked={opcaoSimNao === 1}
                  onChange={() => selecaoSimNao(1)}
                  className="size-5 md:size-6"
                />
                <p>Sim</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <input
                  type="checkbox"
                  checked={opcaoSimNao === 2}
                  onChange={() => selecaoSimNao(2)}
                  className="size-5 md:size-6"
                />
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
              placeholder="Descreva a observação..."
              className="
                shadow-[0_0_50px_rgba(0,0,0,0.10)]
                  w-full
                  h-18
                  rounded-lg 
                  bg-[#e8e8e8]  
                  instrument-sans
                  items-center
                  leading-18
                  py-0
                  px-4
                  text-black
                  placeholder:text-gray-500
                  md:w-[90%]
                  md:h-30
                  md:self-center
                  md:mr-8
                  md:text-xl"
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
            <SecondButton
              onClick={() => navigate(-1)}
              variantClick="secondButton"
            >
              Cancelar
            </SecondButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaRealizarTentativa;
