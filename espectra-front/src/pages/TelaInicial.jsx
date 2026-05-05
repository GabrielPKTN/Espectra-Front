import logo from "../assets/logotipos/logo.png";
import photo_main from "../assets/general_photos/photo_main_xl.svg";
import NavItem from "../components/NavItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";

function TelaInicial() {
  const navigate = useNavigate();

  return (
    // div que gurdar tudo na tela.
    <div className="w-full min-h-screen flex flex-col">
      {/* header */}
      <div className="flex justify-between items-center p-1 md:p-2">
        <img
          src={logo}
          alt="logotipo espectra"
          className="p-4 w-30 
                  md:p-5 md:w-36"
        />

        {/* NECESSÁRIO COLOCAR OS LINKS DEPOIS */}
        <nav>
          <ul
            className="flex gap-2 p-3 inclusive-sans font-normal text-lg text-black
              md:gap-8 md:p-6"
          >
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
      <div
        className="flex flex-col items-center justify-between gap-8
        lg:grid lg:grid-cols-2
        xl:grid xl:grid-cols-2"
      >
        <div
          className="my-10 flex flex-col items-center gap-4 px-6 
            md:my-16 md:gap-8 md:px-12
            lg:gap-16
            xl:gap-16"
        >
          {/* div do texto que existe no header e o botao */}
          <div className="flex flex-col m-5">
            <p
              className="imprima-regular text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-4xl
            "
            >
              BEM VINDO AO
            </p>
            <h1
              className="inclusive-sans font-bold text-6xl dark-blue
                md:text-7xl
                lg:text-8xl
                xl:text-8xl"
            >
              ESPECTRA
            </h1>
            <span
              className="inclusive-sans text-xl font-light
              md:text-2xl
              lg:text-2xl lg:p-2 lg:font-normal
              xl:text-2xl xl:p-2 xl:font-normal"
            >
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
        <div
          className="md:my-5
          "
        >
          <img
            src={photo_main}
            alt="imagem-prof"
            className="object-contain w-80 h-fit
              md:w-96 md:h-auto
              lg:h-auto lg:w-150 lg:p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
