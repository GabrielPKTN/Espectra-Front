import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade"

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/cadastro-atividade" element={<TelaCadastroAtividade />} />
    </Routes>
  );
}

export default Rotas;
