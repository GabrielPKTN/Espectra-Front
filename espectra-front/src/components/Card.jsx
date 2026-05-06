function Card({ titulo, descricao, imagem, children }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-10 h-100 w-100 flex flex-col items-center text-center gap-20">
      {imagem && (
        <img src={imagem} alt={titulo} className="w-16 h-16 rounded-xl" />
      )}

      <h2 className="text-lg text-[#3277CF] font-bold">{titulo}</h2>

      <p className="text-[#3277CF]">{descricao}</p>

      {/* 👇 ESSA LINHA RESOLVE TUDO */}
      <div className="flex gap-3 mt-4">{children}</div>
    </div>
  );
}

export default Card;
