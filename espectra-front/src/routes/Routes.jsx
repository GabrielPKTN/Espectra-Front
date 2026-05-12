import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade";
import TelaCadastroAtividadePersonalizada from "../pages/TelaCadastroAtividadePersonalizada";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/cadastro-atividade" element={<TelaCadastroAtividade />} />
      <Route path="/cadastro-atividade-personalizada" element={<TelaCadastroAtividadePersonalizada />} />
    </Routes>
  );
}

export default Rotas;
