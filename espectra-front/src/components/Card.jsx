function Card({
  titulo,
  descricao,
  imagem,
  corTitulo = "",
  corDescricao = "",
  fundo = "",
  children,
  rowButtons = {},
}) {
  return (
    <div
      className={`${fundo} rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-10 w-[340px] flex flex-col items-center text-center gap-5 mb-3`}
    >
      {imagem && (
        <img
          src={imagem}
          alt={titulo}
          className="w-16 h-16 object-cover rounded-xl"
        />
      )}

      <h2 className={`text-lg font-bold ${corTitulo}`}>{titulo}</h2>

      <p className={corDescricao}>{descricao}</p>

      {/* BOTÕES */}
      <div
        className={`w-full flex gap-3 ${
          rowButtons ? "flex-row justify-center" : "flex-col"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;

//bg-gray-100 rounded-2xl shadow-md p-10 h-100 w-100 flex flex-col items-center text-center gap-20
