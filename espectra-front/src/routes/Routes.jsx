import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardExclusao from "../pages/CardExclusao";;
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaAdicionarPaciente from "../pages/TelaAdicionarPaciente";
import TelaHome from "../pages/TelaHome";
import TelaLogin from "../pages/TelaLogin";
import TelaCadastroFamiliar from "../pages/TelaCadastroFamiliar";

function Rotas() {
  return (
    <Routes>
      <Route path="/card-exclusao" element={<CardExclusao />} />
      {/*<Route path="/" element={<TelaInicial />} />*/}
     {/*<Route path="/cadastro" element={<TelaCadastro />} />*/}
      <Route path="/home" element={<TelaHome />} />
      <Route path="/cadastro_familiar" element={<TelaCadastroFamiliar />} />
      <Route path="/adicionar_paciente" element={<TelaAdicionarPaciente />} />
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/login" element={<TelaLogin />} />
    </Routes>
  );
}

export default Rotas;
