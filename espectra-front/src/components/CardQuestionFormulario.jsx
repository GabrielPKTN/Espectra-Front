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
      className={`${corFundoPergunta} w-full flex items-start  gap-4 pt-0 px-4 pb-4  rounded-md shadow-md`}
    >
      {/* NÚMERO */}
      <div
        className={`
          ${corNumero} self-start min-w-[35px] h-[35px] flex items-center justify-center font-bold text-lg`}
      >
        {numero}
      </div>

      {/* TEXTO */}
      <p
        className={`${corPergunta} ${sizePergunta} mt-4 leading-7
        `}
      >
        {pergunta}
      </p>
    </div>
  );
}

export default CardQuestionFormulario;
