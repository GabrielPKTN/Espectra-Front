function InputDefault({
  type,
  value,
  onChange,
  onBlur,
  variantInput = "basicInput",
  name,
  className = "",
  limiteCaracteres,
  placeholder,
}) {
  const estiloInput =
    "border rounded-xl inclusive-sans h-12 w-full p-1 placeholder:text-center placeholder:p-0 lg:h-10 lg:bg-white";
  const variants = {
    basicInput: "border-(--bg-primary-color)",
    errorInput: "border-red-500",
  };

  return (
    <input
      type={type}
      required
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={name}
      maxLength={limiteCaracteres}
      placeholder={placeholder}
      className={`${estiloInput} ${variants[variantInput]} ${className}`}
    />
  );
}

export default InputDefault;
