function CardQuestionFormulario({
  numero,
  pergunta,
  corNumero,
  corFundoPergunta,
  corPergunta,
  sizePergunta,
}) {
  return (
    <div
      className={`${corFundoPergunta} w-full flex items-start  gap-4 pt-0 px-4 pb-4  rounded-md shadow-md lg:gap-10 lg:px-5`}
    >
      {/* NÚMERO */}
      <div
        className={`
          ${corNumero} self-start min-w-[35px] h-[35px] flex items-center justify-center text-lg inclusive-sans lg:text-xl`}
      >
        {numero}
      </div>

      {/* TEXTO */}
      <p
        className={`${corPergunta} ${sizePergunta} mt-4 leading-7 inclusive-sans lg:text-xl p-4 
        `}
      >
        {pergunta}
      </p>
    </div>
  );
}

export default CardQuestionFormulario;
