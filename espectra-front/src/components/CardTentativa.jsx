function CardTentativa({
    titulo, 
    descricao,
    resultado, 
    data,
    altura = "",
    largura = "",
    corTitulo = "",
    corDescricao = "",
    className = "",
    fundo = "",
    relative,
    children,
    rowButtons = false
}) {

    const estiloResultado = resultado === "Êxito" ? "text-green-600 font-bold" : "text-red-600 font-bold"
          
    return (
        <div
      className={`
        ${fundo}
        ${altura}
        ${largura}
        ${className}
        relative
        rounded-2xl
        shadow-[4px_4px_4px_rgba(0,0,0,0.40)]
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-300
        p-4
        flex
        flex-col
        gap-2
      `}
    >

      {/* Título */}
      <h2
        className={`
          w-full
          text-left
          text-lg
          font-bold
          font-['Instrument_Sans']
          text-[18px]
          ${corTitulo}
        `}
      >
        {titulo}
      </h2>

      {/* Resultado + Data */}
      <div className="w-full flex justify-between items-center font-['Instrument_Sans']">
        <p className={corDescricao}>
          {descricao}{""}

          <span className={estiloResultado}>
            {resultado}
          </span>
        </p>

        <p className="text-black font-bold text-sm font-['Instrument_Sans']">
          {data}
        </p>
      </div>

      {/* Botões */}
      <div
        className={`
          w-full
          flex
          ${rowButtons
            ? "flex-row justify-center items-center"
            : "justify-end"}
        `}
      >
        {children}
      </div>
    </div>
    );
}

export default CardTentativa;