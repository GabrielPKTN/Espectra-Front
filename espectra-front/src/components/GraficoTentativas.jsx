import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const data = [
    {
        data: "20/03/2026",
        valor: 1,
        color: "#FF2D2D"
    },
    {
        data: "20/03/2026",
        valor: 2,
        color: "#FAE938"
    },
    {
        data: "20/03/2026",
        valor: 3,
        color: "#A2E289"
    }
]

function GraficoTentativas(){
    return (
        <div className="w-full h-[500px] p-2 rounded-xl">
            {/* ResponsiveContainer -> Faz o gráfico se adequar ao tamanho da div */}
            <ResponsiveContainer width="100%" height="100%">

                {/* BarChart -> Principal componente do gráfico de barras 
                    Data -> Recebe o array com os dados */
                }
                <BarChart data={data}
                    margin={{
                        left: 47,
                        top: 35
                    }}
                >

                    {/* CartesianGrid -> Adiciona as linhas de fundo do gráfico
                        vertical={false} -> Remove as linhas verticais, criando as horizontais
                    */}
                    <CartesianGrid vertical={false}/>

                    {/* XAxis -> Configura o eixo X do gráfico (Horizontal) */}    
                    <XAxis 
                        dataKey="data"
                        orientation="top"
                        tickMargin={15}
                        tickLine={false}
                        axisLine={false}
                    />
                    
                    {/* YAxis -> Configura o eixo Y do gráfico (Vertical) */}
                    <YAxis

                        //Domain -> Define o limite do eixo
                        domain={[0,3]} 

                        // Ticks -> Define os balores que aparecerão no eixo
                        ticks={[1,2,3]}
                        tickFormatter={(value) => {
                            if(value === 1) return "Total";
                            if(value === 2) return "Parcial";
                            if(value === 3) return "Independente";
                        }}
                        tickLine={false}
                        axisLine={false}
                    />

                    {/* Bar -> Componente que cria as barras do gráfico */}
                    <Bar
                        dataKey="valor"
                        barSize={35}
                    > 
                        {data.map((entry, index) => (

                            //Cell -> Personaliza cada barra
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                            />
                        ))} 
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraficoTentativas;