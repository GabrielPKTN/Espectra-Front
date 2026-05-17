import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoricoTentativa from "../pages/TelaHistoricoTentativa";
import CardExclusao from "../pages/CardExclusao";;
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
      <Route path="/" element={<HistoricoTentativa />} />
      <Route path="/card-exclusao" element={<CardExclusao />} />
      {/*<Route path="/" element={<TelaInicial />} />*/}
     {/*<Route path="/cadastro" element={<TelaCadastro />} />*/}
      <Route path="/home" element={<TelaHome />} />
      <Route path="/cadastro_familiar" element={<TelaCadastroFamiliar />} />
      <Route path="/adicionar_paciente" element={<TelaAdicionarPaciente />} />
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/perfil-paciente" element={<TelaPerfilPaciente />} />
      <Route path="/atividades/" element={<TelaAtividades />} />
      <Route path="/atividades/editar" element={<TelaEditarAtividade />} />
      <Route path="/atividades/cadastrar" element={<TelaCadastroAtividade />} />

      <Route path="/formulario" element={<TelaFormulario />} />

      <Route path="/cadastro-atividade" element={<TelaCadastroAtividade />} />
      <Route path="/atividade/editar" element={<TelaEditarAtividade />} />
      <Route path="/atividade/cadastrar" element={<TelaCadastroAtividade />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/tentativa" element={<TelaRealizarTentativa />} />
    </Routes>
  );
}

export default Rotas;