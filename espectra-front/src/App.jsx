import Rotas from "./routes/Routes";
import { Toaster } from "react-hot-toast";

//O APP SERVIRÁ COMO GERENCIADOR DE ROTAS. COMO AS PAGINAS SAO MUITO DIFERENTES UMA DAS OUTRAS, NAO TEM A POSSIBILIDADE DE HAVER UM LAYOUT PADRAO PARA SER COLOCADO AQUI.
// AS PAGINAS DEVEM SER CRIADAS NA PASTA PAGES.
function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }}
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />

      <Rotas />
    </>
  );
}

export default App;
