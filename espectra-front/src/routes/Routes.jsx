import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerfilPsicopedagogo from "../pages/TelaPerfilPsicopedagogo";
import TelaInicial from "../pages/TelaInicial";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PerfilPsicopedagogo/>} />
      <Route path="/telaInicial" element={<TelaInicial/>} />
    </Routes>
  );
}

export default Rotas;
