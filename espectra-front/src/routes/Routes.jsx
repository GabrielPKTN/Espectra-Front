import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaAdicionarPaciente from "../pages/TelaAdicionarPaciente";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/adicionar_paciente" element={<TelaAdicionarPaciente />} />
    </Routes>
  );
}

export default Rotas;
