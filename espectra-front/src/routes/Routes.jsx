import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardExclusao from "../pages/CardExclusao";;
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaLogin from "../pages/TelaLogin";

function Rotas() {
  return (
    <Routes>
      <Route path="/card-exclusao" element={<CardExclusao />} />
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/login" element={<TelaLogin />} />
    </Routes>
  );
}

export default Rotas;
