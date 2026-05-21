import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import TelaCadastro from "../pages/TelaCadastro";
import TelaLogin from "../pages/TelaLogin";
import TelaHome from "../pages/TelaHome";
import TelaPerfilPaciente from "../pages/TelaPerfilPaciente";
import TelaFormulario from "../pages/TelaFormulario";
import TelaEditarAtividade from "../pages/TelaEditarAtividade";
import TelaCadastroAtividade from "../pages/TelaCadastroAtividade";
import TelaAtividades from "../pages/TelaAtividades";
import TelaAdicionarPaciente from "../pages/TelaAdicionarPaciente";
import TelaRealizarTentativa from "../pages/TelaRealizarTentativa";
import HistoricoTentativa from "../pages/TelaHistoricoTentativa";
import TelaCadastroFamiliar from "../pages/TelaCadastroFamiliar";
import PerfilPsicopedagogo from "../pages/TelaPerfilPsicopedagogo";
import AtualizarPerfilPsicopedagogo from "../pages/TelaAtualizarPerfilPsicopedagogo";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/home" element={<TelaHome />} />
      <Route path="/perfil-paciente/:id" element={<TelaPerfilPaciente />} />
      <Route path="/adicionar-paciente" element={<TelaAdicionarPaciente />} />
      <Route path="/formulario" element={<TelaFormulario />} />
      <Route path="/atividades/" element={<TelaAtividades />} />
      <Route path="/atividades/editar" element={<TelaEditarAtividade />} />
      <Route path="/atividades/adicionar" element={<TelaCadastroAtividade />} />
      <Route path="/tentativa/" element={<TelaRealizarTentativa />} />
      <Route path="/tentativa/historico" element={<HistoricoTentativa />} />

      <Route path="/cadastro-familiar" element={<TelaCadastroFamiliar />} />
      <Route path="/perfil" element={<PerfilPsicopedagogo />} />

      <Route
        path="/atualizarPerfilPsicopedagogo"
        element={<AtualizarPerfilPsicopedagogo />}
      />
    </Routes>
  );
}

export default Rotas;
