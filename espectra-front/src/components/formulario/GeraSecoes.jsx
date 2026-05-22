import CardTextFormulario from "./CardTextFormulario";
import GeraComportamento from "./GeraComportamento";

function GeraSecoes(

    { arrayComportamento, setRespostas }

) {

    const categorias = arrayComportamento.reduce((acumulador, comportamento) => {

        const idHabilidade = comportamento.id_habilidade

        const mapas = {

            1: 'arraySocializacao',
            2: 'arrayLinguagem',
            3: 'arrayCognicao',
            4: 'arrayAutoCuidados',
            5: 'arrayDesMotor'

        }

        const chave = mapas[idHabilidade]

        if (chave) {
            acumulador[chave].push(comportamento)
        }

        return acumulador

    }, {

        arraySocializacao: [],
        arrayLinguagem: [],
        arrayCognicao: [],
        arrayAutoCuidados: [],
        arrayDesMotor: []

    })

    return <div className="max-w-4xl mx-auto flex flex-col gap-8">

        <section className="socializacao" data-key={1} key={1}>

            <CardTextFormulario
                titulo="Socialização"
                corFundoTitulo="bg-[#A2E289]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arraySocializacao} setRespostas={setRespostas} corNumeracao={"A2E289"} />

            </div>


        </section>

        <section className="linguagem" data-key={2} key={2}>

            <CardTextFormulario
                titulo="Linguagem"
                corFundoTitulo="bg-[#FFC87B]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayLinguagem} corNumeracao={"FFC87B"} />

            </div>


        </section>

        <section className="cognicao" data-key={3} key={3}>

            <CardTextFormulario
                titulo="Cognição"
                corFundoTitulo="bg-[#71AFFF]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayCognicao} corNumeracao={"71AFFF"} />

            </div>


        </section>

        <section className="auto-cuidados" data-key={4} key={4}>

            <CardTextFormulario
                titulo="Auto-cuidados"
                corFundoTitulo="bg-[#CC9DFF]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayAutoCuidados} corNumeracao={"CC9DFF"} />

            </div>


        </section>

        <section className="des-motor" data-key={5} key={5}>

            <CardTextFormulario
                titulo="Desenvolvimento-motor"
                corFundoTitulo="bg-[#C8C8C8]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayDesMotor} corNumeracao={"C8C8C8"} />

            </div>


        </section>




    </div>

}

export default GeraSecoes;