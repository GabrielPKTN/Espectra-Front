import CardQuestionFormulario from "./CardQuestionFormulario";
import GroupResposta from "./GroupResposta";

function GeraComportamento({ array, corNumeracao, setRespostas, respostas }) {

    let arrayComponents = [];

    for (let comportamento of array) {

        arrayComponents.push(

            <div className="py-5" key={comportamento.id_atividade_portage} data-key={comportamento.id_atividade_portage}>

                <CardQuestionFormulario
                    numero={comportamento.numero_questao}
                    corNumero={`bg-[#${corNumeracao}]`}
                    pergunta={comportamento.comportamento}
                    corFundoPergunta="bg-[#F9F9F9]"
                    corPergunta="text-black"
                    sizePergunta="text-sm sm:text-base md:text-lg"
                />

                <div className="w-full mt-6">
                    <GroupResposta setRespostas={setRespostas} respostas={respostas} idFormPortage={`${comportamento.id_habilidade}-${comportamento.id_atividade_portage}`} opcoes={["Sim", "Não", "Sim, com mediação"]} />
                </div>

            </div>

        )

    }

    return arrayComponents

}

export default GeraComportamento;