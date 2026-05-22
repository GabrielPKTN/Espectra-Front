import CardTextFormulario from "./CardTextFormulario";
import GeraComportamento from "./GeraComportamento";

function GeraSecoes(

    { arrayComportamento }

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

        <section className="socializacao">

            <CardTextFormulario
                titulo="Socialização"
                corFundoTitulo="bg-[#A2E289]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arraySocializacao} corNumeracao={"A2E289"} />

            </div>


        </section>

        <section className="linguagem">

            <CardTextFormulario
                titulo="Linguagem"
                corFundoTitulo="bg-[#FFC87B]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayLinguagem} corNumeracao={"FFC87B"} />

            </div>


        </section>

        <section className="cognicao">

            <CardTextFormulario
                titulo="Cognição"
                corFundoTitulo="bg-[#71AFFF]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayCognicao} corNumeracao={"71AFFF"} />

            </div>


        </section>

        <section className="auto-cuidados">

            <CardTextFormulario
                titulo="Auto-cuidados"
                corFundoTitulo="bg-[#CC9DFF]"
                corTitulo="text-black"
            />

            <div className="flex flex-col gap-8">

                <GeraComportamento array={categorias.arrayAutoCuidados} corNumeracao={"CC9DFF"} />

            </div>


        </section>

        <section className="des-motor">

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