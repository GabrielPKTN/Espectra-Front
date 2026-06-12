import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial.jsx";
import TelaCadastro from "../pages/TelaCadastro.jsx";
import TelaLogin from "../pages/TelaLogin.jsx";
import TelaHome from "../pages/TelaHome.jsx";
import TelaPerfilPaciente from "../pages/TelaPerfilPaciente.jsx";
import TelaFormulario from "../pages/TelaFormulario.jsx";
import TelaEditarAtividade from "../pages/TelaEditarAtividade.jsx";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade.jsx";
import TelaAtividades from "../pages/TelaAtividades.jsx";
import TelaAdicionarPaciente from "../pages/TelaAdicionarPaciente.jsx";
import TelaRealizarTentativa from "../pages/TelaRealizarTentativa.jsx";
import HistoricoTentativa from "../pages/TelaHistoricoTentativa.jsx";
import TelaCadastroFamiliar from "../pages/TelaCadastroFamiliar.jsx";
import PerfilUsuario from "../pages/TelaPerfil.jsx";
import AtualizarPerfilUsuario from "../pages/AtualizarPerfilUsuario.jsx"

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/home" element={<TelaHome />} />
      <Route path="/perfil-paciente/:id" element={<TelaPerfilPaciente />} />
      <Route path="/adicionar-paciente" element={<TelaAdicionarPaciente />} />
      <Route path="/formulario/:id_paciente/:id_usuario" element={<TelaFormulario />} />
      <Route path="/atividades/" element={<TelaAtividades />} />
      <Route path="/atividades/editar/:id" element={<TelaEditarAtividade />} />
      <Route path="/atividades/adicionar" element={<TelaCadastroAtividade />} />
      <Route path="/tentativa/:id" element={<TelaRealizarTentativa />} />
      <Route path="/tentativa/historico/:id_atividade" element={<HistoricoTentativa />} />
      <Route path="/cadastro-familiar" element={<TelaCadastroFamiliar />} />
      <Route path="/perfil/:id_usuario" element={<PerfilUsuario />} />
      <Route path="/perfil/atualizar/:id_usuario" element={<AtualizarPerfilUsuario />} />
    </Routes>
  );
}

export default Rotas;
