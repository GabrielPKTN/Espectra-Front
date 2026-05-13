import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaEditarAtividade from "../pages/TelaEditarAtividade";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade";
import TelaAtividades from "../pages/TelaAtividades";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/atividades/" element={<TelaAtividades />} />
      <Route path="/atividades/editar" element={<TelaEditarAtividade />} />
      <Route path="/atividades/cadastrar" element={<TelaCadastroAtividade />} />

    </Routes>
  );
}

export default Rotas;
