export default function CheckboxAtividade({ opcaoSelecionada, setOpcaoSelecionada }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="instrument-sans font-semibold text-lg">
        A habilidade que vai ser desenvolvida é?...
      </p>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="atividade"
          value="personalizada"
          checked={opcaoSelecionada === "personalizada"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
          className="size-5 md:size-7"
        />

        <span className="instrument-sans text-lg">
          Personalizada
        </span>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="atividade"
          value="portage"
          checked={opcaoSelecionada === "portage"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
          className="size-5 md:size-7 mt-1"
        />

        <span className="instrument-sans text-lg">
          Baseada em habilidades não desenvolvidas com respostas da avaliação feita.
        </span>
      </div>
    </div>
  );
}