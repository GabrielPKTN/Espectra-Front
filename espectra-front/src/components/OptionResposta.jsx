function OptionResposta({ texto, name }) {
  return (
    <label className="flex text-1xl items-center gap-2 cursor-pointer">
      <input type="radio" name={name} className="w-6 h-6 accent-blue-500" />

      <span className="text-md md:text-lg inclusive-sans">{texto}</span>
    </label>
  );
}

export default OptionResposta;
