import { useState } from "react";
import "./App.css";
import TelaInicial from "./pages/TelaInicial";

//O APP SERVIRÁ COMO GERENCIADOR DE ROTAS. COMO AS PAGINAS SAO MUITO DIFERENTES UMA DAS OUTRAS, NAO TEM A POSSIBILIDADE DE HAVER UM LAYOUT PADRAO PARA SER COLOCADO AQUI.
// AS PAGINAS DEVEM SER CRIADAS NA PASTA PAGES.
function App() {
  return <TelaInicial />;
}

export default App;
