import logotipo from "../assets/logotipos/logotipo.svg";
import button_unselected from "../assets/general_photos/button_unselected.svg";

function TelaCadastro() {
  return (
    // div que guarda tudo que estiver da tela
    <div className="flex flex-col bg-primary-color w-screen h-screen items-center">

      <div className="flex justify-center items-center p-12">
        <img src={logotipo} alt="logotipo espectra" className="w-auto h-32"/>
      </div>
      <div className="bg-white w-screen h-auto rounded-ss-4xl flex flex-col items-center">

        <h1 className="primary-color instrument-sans dark-blue font-bold text-2xl p-6">Cadastro</h1>

        {/*div que possue as modalidades de cadastro, sendo elas psicopedagogo e familiar*/}
        <div className="flex gap-10 instrument-sans primary-color font-bold">
           {/*para o button dessas divs, quando o onClick for realizado, a foto devera mudar para o selected button. Alem disso, aqui devera ter a conexao com o banco para conseguir selecionar as modalidades de cadastro!*/}
          <div className="flex gap-2">
            <button>
              <img src={button_unselected} alt="botao nao selecionado" />
            </button>
            <span>Psicopedagogo</span>
          </div>

          <div className="flex gap-2">
            <button>
              <img src={button_unselected} alt="botao nao selecionado" />
            </button>
            <span>Familiar</span>
          </div>
        </div>

      {/*div que carrega as informacoes de cadastro
      NECESSARIO COMPONENTIZAR ESSE INPUT, POIS ELE É MUITO USADO NO DESIGN*/}
        <div className="flex flex-col mt-8 inclusive-sans primary-color">
        <div className="w-auto flex flex-col p-2">
          <p className="font-semibold text-lg">Nome</p>
          <input id="name" type="text" className="w-75.5 h-12 border rounded-xl"/>
        </div>
        </div>


      
      </div>
      


    </div>
  )
}

export default TelaCadastro;
