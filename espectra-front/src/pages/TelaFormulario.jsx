import logo from "../assets/logotipos/logo.png";
import psicopedagogo from "../assets/general_photos/psicopedagogo.png";
import Button from "../components/Button";
import Header from "../components/formulario/HeaderFormulario"; // Importe o Header criado
import GeraSecoes from "../components/formulario/GeraSecoes.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api.js";

function TelaFormulario() {
  const navigate = useNavigate();
  const [comportamentos, setComportamentos] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const { id_paciente, id_usuario } = useParams();

  const token = localStorage.getItem("token");

  const requestData = async () => {
    try {
      const result = await api.get(
        `/v1/espectra/formulario/${id_paciente}/${id_usuario}`,
        {
          headers: {
            "x-access-token": token,
          },
        },
      );

      let rawData = result.data;
      setComportamentos(rawData.items || []);
    } catch (error) {
      console.error("Erro na requisição do formulário:", error);
      toast.error("Erro ao carregar o formulário.");
    } finally {
      setCarregando(false);
    }
  };

  const atualizaDados = async () => {
    try {
      const url = `/v1/espectra/formulario/${id_paciente}/${id_usuario}`;

      const dadosAtualizados = {
        formulario: respostas,
      };

      const configHeader = {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      };

      await api.put(url, dadosAtualizados, configHeader);
      toast.success("Formulário enviado com sucesso!");
      navigate(`/perfil-paciente/${id_paciente}`);
    } catch (error) {
      console.error(
        "Erro na requisição do formulário:",
        error.response?.data || error.message,
      );
      toast.error("Erro ao enviar o formulário.");
    }
  };

  useEffect(() => {
    if (!token) {
      console.error("Token não encontrado no localStorage.");
      toast.error("A sessão expirou. Faça login novamente!");
      navigate("/login");
      return;
    }
    requestData();
  }, [id_paciente, id_usuario]);

  return (
    <div className="min-h-screen bg-[#3277CF] flex flex-col lg:bg-white">
      {/* TOPO: O Header fica fora da div de conteúdo principal */}
      <Header
        title="0 a 6 anos"
        userImage={psicopedagogo} // Troque pela sua lógica de imagem
        userName={"Larissa"}
        logoSource={logo}
      />

      {/* CONTEÚDO BRANCO CHANFRADO */}
      <div className="flex-1 bg-white rounded-t-[20px] px-4 py-8 sm:px-6 md:px-10 lg:px-20 mt-[-30px] shadow-2xl lg:w-[65%] lg:self-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {comportamentos.length > 0 ? (
            <GeraSecoes
              arrayComportamento={comportamentos}
              setRespostas={setRespostas}
              respostas={respostas}
            />
          ) : (
            <div className="text-center text-gray-500 py-10 animate-pulse">
              Carregando formulário...
            </div>
          )}

          <div className="w-full flex flex-row items-center justify-center gap-4 mt-10">
            <Button
              className="w-full sm:w-auto px-10 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
              onClick={() => navigate(`/perfil-paciente/${id_paciente}`)}
            >
              Cancelar
            </Button>
            <Button
              className="w-full sm:w-auto px-10 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              onClick={() => atualizaDados()}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaFormulario;
