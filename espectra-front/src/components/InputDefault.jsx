function InputDefault({
  type = "text",
  value,
  onChange,
  variantInput = "basicInput",
  name,
  limiteCaracteres,
}) {
  const estiloInput = "border rounded-xl inclusive-sans h-12 w-75.5";
  const variants = {
    basicInput: "primary-color",
    errorInput: "bg-red-500",
  };

  return (
    <input
      type={type}
      required
      value={value}
      onChange={onChange}
      id={name}
      maxLength={limiteCaracteres}
      className={`${estiloInput} ${variants[variantInput]}`}
    />
  );
}

export default InputDefault;
