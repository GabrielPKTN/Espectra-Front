function LegendaHabilidade({ children, color = "", className }) {
  const estiloBaseLegenda = "h-7 w-7 rounded-sm";

  return (
    <div className="flex flex-row gap-2 items-center">
      <div className={`${estiloBaseLegenda} ${color} ${className}`}></div>
      <p>{children}</p>
    </div>
  );
}

export default LegendaHabilidade;
