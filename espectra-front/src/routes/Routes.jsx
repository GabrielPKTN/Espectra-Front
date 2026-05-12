import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaEditarAtividade from "../pages/TelaEditarAtividade";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/atividade/editar" element={<TelaEditarAtividade />} />
      <Route path="/atividade/cadastrar" element={<TelaCadastroAtividade />} />
    </Routes>
  );
}

export default Rotas;
