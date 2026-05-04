import logo from "../assets/logotipos/logo.png";
import photo_main from "../assets/general_photos/photo_main.png";
import NavItem from "../components/NavItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";

function TelaInicial() {
  const navigate = useNavigate();

  return (
    // div que gurdar tudo na tela.
    <div className="w-screen h-full flex flex-col">
      {/* header */}
      <div
        className="flex justify-between items-center p-1
      md:p-4"
      >
        <img src={logo} alt="logotipo espectra" className="p-4 w-32" />

        {/* NECESSÁRIO COLOCAR OS LINKS DEPOIS */}
        <nav>
          <ul className="flex gap-2 p-3 inclusive-sans font-normal text-lg text-black md:gap-6">
            <NavItem href="https://github.com/GabrielPKTN/Espectra-Front.git">
              Contato
            </NavItem>
            <NavItem href="https://github.com/GabrielPKTN/Espectra-Front.git">
              Sobre
            </NavItem>
            <NavItem href="/Login">Login</NavItem>
          </ul>
        </nav>
      </div>

      {/* main */}
      <div className="flex flex-col items-center justify-between gap-8 md:gap-20">
        <div className="my-10 flex flex-col items-center gap-4 md:my-8 px-40">
          {/* div do texto que existe no header e o botao */}
          <div className="flex flex-col m-5">
            <p className="imprima-regular text-2xl md:text-4xl w-full">
              BEM VINDO AO
            </p>
            <h1 className="inclusive-sans font-bold text-6xl dark-blue md:text-8xl">
              ESPECTRA
            </h1>
            <span className="inclusive-sans text-xl font-light w-full md:text-2xl">
              Acompanhe, registre e celebre cada passo do desenvolvimento.
            </span>
          </div>

          <Button
            variantClick="basicClick"
            onClick={() => navigate("/cadastro")}
          >
            Comece a usar
          </Button>
        </div>
        <div className="grow">
          <img
            src={photo_main}
            alt="imagem-prof"
            className="object-contain w-auto h-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
