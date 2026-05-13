import OptionResposta from "./OptionResposta";

function GroupResposta() {
  return (
    <div
      className="
        flex
        justify-between
        items-start
        gap-4
        w-full
      "
    >
      <OptionResposta texto="Sim" name="resposta1" />

      <OptionResposta texto="Não" name="resposta1" />

      <OptionResposta texto="Sim, com mediação" name="resposta1" />
    </div>
  );
}

export default GroupResposta;
