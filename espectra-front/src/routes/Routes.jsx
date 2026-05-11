import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardExclusao from "../pages/CardExclusao";;

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<CardExclusao />} />
    </Routes>
  );
}

export default Rotas;
