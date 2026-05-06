import logo from "../assets/logotipos/logo.png";
import Button from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function TelaModalConfirmacao() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center ">
      <Card
        titulo="Tem certeza que deseja confirmar essa ação ?"
        descricao=" Esse paciente já teve atendimento nessa plataforma antes."
      >
        <Button onClick={() => navigate("/cadastro")}>Cancelar</Button>

        <Button onClick={() => navigate("/cadastro")}>Confirmar</Button>
      </Card>
    </div>
  );
}

export default TelaModalConfirmacao;
