import logo_v1 from "../assets/logotipos/logo_v1.png";

function TelaInicial() {
  return (
    // div que gurdar tudo na tela.
    <div className="w-screen h-screen">
      {/* header */}
      <div className="flex justify-between items-center p-1">
        <img src={logo_v1} alt="logotipo espectra" className="p-4" />

        {/* NECESSÁRIO COLOCAR OS LINKS DEPOIS */}
        <nav>
          <ul className="flex gap-8 p-5 font-sans font-semibold text-lg text-black">
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li className="hover:bg-[#3277CF] hover:text-white px-2 rounded-2xl transition-colors duration-200">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* main */}
      <div></div>
    </div>
  );
}

export default TelaInicial;
