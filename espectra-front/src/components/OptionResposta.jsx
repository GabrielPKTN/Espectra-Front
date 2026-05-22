function OptionResposta({ texto, name, checked, onClick }) {
  return (
    <div onClick={onClick} className="relative">

        <label className="flex text-1xl items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={() => {}}
          className="w-6 h-6 accent-blue-500" />

        <span className="text-md md:text-lg inclusive-sans">{texto}</span>
        </label>

        <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0" onClick={onClick}></div>

    </div>
  );
}

export default OptionResposta;
