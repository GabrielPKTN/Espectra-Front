import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaPerfilPaciente from "../pages/TelaPerfilPaciente";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/perfil-paciente" element={<TelaPerfilPaciente />} />
    </Routes>
  );
}

export default Rotas;
