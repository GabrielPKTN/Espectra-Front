import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerfilPsicopedagogo from "../pages/TelaPerfilPsicopedagogo";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import AtualizarPerfilPsicopedagogo from "../pages/TelaAtualizarPerfilPsicopedagogo"

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PerfilPsicopedagogo />} />
      <Route path="/telaInicial" element={<TelaInicial />} />
      <Route path="/atualizarPerfilPsicopedagogo" element={<AtualizarPerfilPsicopedagogo />} />
    </Routes>
  );
}

export default Rotas;
