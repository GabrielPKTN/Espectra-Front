import { useState } from "react";
import OptionResposta from "../OptionResposta";

function GroupResposta({idPortage, idFormPortage, setRespostas}) {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("")

  const clickOption = (nomeOpcao) => {

    setOpcaoSelecionada(nomeOpcao)

  }

  const respostasMarcadas = []

  const setRespostasMarcadas = (object) => {



  }
  
  return (
    <div key={idPortage} data-key={idPortage}
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
      <OptionResposta 
        texto="Sim" 
        name={`1-${idFormPortage}`}
        checked={opcaoSelecionada === `1-${idFormPortage}`}
        onClick={() => clickOption(`1-${idFormPortage}`)}
      />

      <OptionResposta
        texto="Não"
        name={`2-${idFormPortage}`}
        checked={opcaoSelecionada === `2-${idFormPortage}`}
        onClick={() => clickOption(`2-${idFormPortage}`)}
      />

      <OptionResposta
        texto="Sim, com mediação"
        name={`3-${idFormPortage}`}
        checked={opcaoSelecionada === `3-${idFormPortage}`}
        onClick={() => clickOption(`3-${idFormPortage}`)}
      />

    </div>
  );
}

export default GroupResposta;
