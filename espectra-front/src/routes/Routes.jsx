import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoricoTentativa from "../pages/TelaHistoricoTentativa";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaPerfilPaciente from "../pages/TelaPerfilPaciente";
import TelaFormulario from "../pages/TelaFormulario";
import TelaEditarAtividade from "../pages/TelaEditarAtividade";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade";
import TelaAtividades from "../pages/TelaAtividades";
import TelaAdicionarPaciente from "../pages/TelaAdicionarPaciente";
import TelaHome from "../pages/TelaHome";
import TelaLogin from "../pages/TelaLogin";
import TelaRealizarTentativa from "../pages/TelaRealizarTentativa";
import TelaCadastroFamiliar from "../pages/TelaCadastroFamiliar";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/home" element={<TelaHome />} />
      <Route path="/perfil-paciente" element={<TelaPerfilPaciente />} />
      <Route path="/adicionar-paciente" element={<TelaAdicionarPaciente />} />
      <Route path="/formulario" element={<TelaFormulario />} />
      <Route path="/atividades/" element={<TelaAtividades />} />
      <Route path="/atividades/editar" element={<TelaEditarAtividade />} />
      <Route path="/atividades/adicionar" element={<TelaCadastroAtividade />} />
      <Route path="/tentativa" element={<TelaRealizarTentativa />} />
      <Route path="/tentativa/historico" element={<HistoricoTentativa />} />
      
      <Route path="/cadastro-familiar" element={<TelaCadastroFamiliar />} />    
    </Routes>
  );
}

export default Rotas;