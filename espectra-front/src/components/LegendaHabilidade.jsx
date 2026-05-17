function LegendaHabilidade({ children, color = "", className = "" }) {
  const estiloBaseLegenda = "h-6.5 w-6.5 rounded-sm border border-black/5";

  return (
    <div className="flex flex-row gap-1 items-center">
      <div className={`${estiloBaseLegenda} ${color} ${className}`}></div>
      <p className="font-medium instrument-sans">{children}</p>
    </div>
  );
}

export default LegendaHabilidade;
