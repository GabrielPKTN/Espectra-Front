import logo from "../assets/logotipos/logo.png";
import Button from "../components/Button";
import CardFormulario from "../components/CardFormulario";
//import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function TelaFormulario() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-blue-500 flex items-center justify-center ">
      <CardFormulario
        categoria="Socialiacao"
        titulo="Tem certeza que deseja confirmar essa ação ?"
        descricao=" Esse paciente já teve atendimento nessa plataforma antes."
        fundo="bg-gray-100"
        corTitulo="text-black-700"
        corDescricao="text-red-500"
        rowButtons={true}
      >
        <Button onClick={() => navigate("/cadastro")}>Cancelar</Button>

        <Button onClick={() => navigate("/cadastro")}>Confirmar</Button>
      </CardFormulario>
    </div>
  );
}

export default TelaFormulario;

const categorias = [
  {
    titulo: "Socialização",
    cor: "bg-green-300",

    perguntas: [
      {
        id: 1,
        texto: "Observa uma pessoa movimentando-se em seu campo visual.",
        opcoes: ["Sim", "Não", "Sim, com mediação"],
      },

      {
        id: 2,
        texto: "Responde ao nome.",
        opcoes: ["Sim", "Não", "Sim, com mediação"],
      },
    ],
  },

  {
    titulo: "Comunicação",
    cor: "bg-purple-300",

    perguntas: [
      {
        id: 1,
        texto: "Imita sons.",
        opcoes: ["Sim", "Não", "Às vezes"],
      },
    ],
  },
];
