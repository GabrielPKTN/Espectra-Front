function CardTextFormulario({ titulo, corFundoTitulo, corTitulo }) {
  return (
    <div
      className={`${corFundoTitulo} w-full p-3  flex flex-col items-center  `}
    >
      <h2 className={`${corTitulo} text-2xl font-bold`}>{titulo}</h2>
    </div>
  );
}

export default CardTextFormulario;
//rounded-4xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-10 w-full h-100 flex flex-col items-center text-center gap-5
