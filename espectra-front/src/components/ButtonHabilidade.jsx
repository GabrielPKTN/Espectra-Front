import React from "react";

function ButtonHabilidade({
  children,
  onClick,
  color,
  colorHover,
  type = "button",
  className,
}) {
  const estiloBase =
    "h-9 flex items-center justify-center rounded-lg text-center instrument-sans font-semibold text-lg transition-colors";

  const alteracoesEstilo = className;

  return (
    <button
      onClick={onClick}
      type={type}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${estiloBase} ${color} ${colorHover} ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonHabilidade;
