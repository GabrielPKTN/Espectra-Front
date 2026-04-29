import logo_v1 from "../assets/logotipos/logo_v1.png";
import NavItem from "../components/NavItem";

function TelaInicial() {
  return (
    // div que gurdar tudo na tela.
    <div className="w-screen h-screen">
      {/* header */}
      <div className="flex justify-between items-center p-1">
        <img src={logo_v1} alt="logotipo espectra" className="p-4" />

        {/* NECESSÁRIO COLOCAR OS LINKS DEPOIS */}
        <nav>
          <ul className="flex gap-2 p-3 inclusive-sans font-normal text-lg text-black">
            <NavItem href="/contato">Contato</NavItem>
            <NavItem href="/sobre">Sobre</NavItem>
            <NavItem href="/Login">Login</NavItem>
          </ul>
        </nav>
      </div>

      {/* main */}
      <div className="my-14 flex flex-col items-center">
        {/* div do texto que existe no header */}
        <div className="flex flex-col m-8">
          <p className="imprima-regular text-2xl">BEM VINDO AO</p>
          <h1 className="inclusive-sans font-bold text-6xl dark-blue">
            ESPECTRA
          </h1>
          <span className="inclusive-sans text-xl font-light">
            Acompanhe, registre e celebre cada passo do desenvolvimento.
          </span>
        </div>

        <button
          // onClick={/*vai para a tela de cadastro*/}
          className="bg-(--bg-primary-color) instrument-sans text-xl text-white w-48 h-12 rounded-lg font-bold shadow-[5px_10px_20px_rgba(0,0,0,0.25)] hover:bg-(--bg-secondary-color) transition-colors duration-200"
        >
          Comece a usar!
        </button>
      </div>
    </div>
  );
}

export default TelaInicial;
