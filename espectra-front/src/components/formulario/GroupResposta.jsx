import { useState } from "react";
import OptionResposta from "../OptionResposta";

function GroupResposta({ idPortage, respondida, idFormPortage, setRespostas, respostas }) {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("")

  const clickOption = (nomeOpcao, objectHtml) => {

    setOpcaoSelecionada(nomeOpcao)

    let pai = objectHtml.parentElement
    let inputClicado = pai.querySelector('input[type="radio"]')

    let arrayInfoComportamento = inputClicado.name.split("-")

    let id_resposta = Number(arrayInfoComportamento[0])
    let id_atividade_portage = Number(arrayInfoComportamento[2])

    if (id_atividade_portage > 535 || id_atividade_portage < 1 || id_resposta < 1 || id_resposta > 3) {
      return false // não existe comportamento portage acima de 535 nem resposta acima de 3
    }

    let novaResposta = {
      "id_atividade_portage": id_atividade_portage,
      "id_resposta": id_resposta
    }

    const exists = respostas.some(comportamento => comportamento.id_atividade_portage === id_atividade_portage)

    if (exists) {

      let listaFiltrada = respostas.filter(comportamento => comportamento.id_atividade_portage !== id_atividade_portage)
      setRespostas([...listaFiltrada, novaResposta])

    } else {

      setRespostas([...respostas, novaResposta])

    }

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
        checked={respondida === 1 || opcaoSelecionada === `1-${idFormPortage}`}
        onClick={(e) => clickOption(`1-${idFormPortage}`, e.target)}
      />

      <OptionResposta
        texto="Não"
        name={`2-${idFormPortage}`}
        checked={respondida === 2 || opcaoSelecionada === `2-${idFormPortage}`}
        onClick={(e) => clickOption(`2-${idFormPortage}`, e.target)}
      />

      <OptionResposta
        texto="Sim, com mediação"
        name={`3-${idFormPortage}`}
        checked={respondida === 3 || opcaoSelecionada === `3-${idFormPortage}`}
        onClick={(e) => clickOption(`3-${idFormPortage}`, e.target)}
      />

    </div>
  );
}

export default GroupResposta;
