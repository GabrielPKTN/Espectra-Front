import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoricoTentativa from "../pages/TelaHistoricoTentativa";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HistoricoTentativa />} />
    </Routes>
  );
}

export default Rotas;
