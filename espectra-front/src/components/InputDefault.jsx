function InputDefault({
  type,
  value,
  onChange,
  onBlur,
  variantInput = "basicInput",
  name,
  limiteCaracteres,
  placeholder,
}) {
  const estiloInput =
    "border rounded-xl inclusive-sans h-12 w-full p-1 placeholder:text-center placeholder:p-0";
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
      className={`${estiloInput} ${variants[variantInput]}`}
    />
  );
}

export default InputDefault;
