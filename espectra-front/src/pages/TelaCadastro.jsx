import logotipo from "../assets/logotipos/logotipo.svg";

function TelaCadastro() {
  return (
    // div que guarda tudo que estiver da tela
    <div className="flex flex-col bg-primary-color w-screen h-screen">
      <div className="flex justify-center items-center p-12">
        <img src={logotipo} alt="logotipo espectra" className="w-auto h-32"/>
      </div>
      


    </div>
  )
}

export default TelaCadastro;
