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
        md:justify-around
        lg:justify-center
        lg:gap-12
      "
    >
      <OptionResposta texto="Sim" name="resposta1" />

      <OptionResposta texto="Não" name="resposta1" />

      <OptionResposta texto="Sim, com mediação" name="resposta1" />
    </div>
  );
}

export default GroupResposta;
