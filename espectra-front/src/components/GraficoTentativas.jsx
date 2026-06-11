import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

function GraficoTentativas({ data }) {

    return (
        // <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] p-2 rounded-xl">
        <div style={{ width: '100%', minHeight: '350px', height: '100%' }}>
            <ResponsiveContainer width="100%" height={350}>

                <BarChart data={data} margin={{ left: 47, top: 35 }}
                    margin={{
                        left: 47,
                        top: 35
                    }}
                >

                    <CartesianGrid vertical={false} />

                    <XAxis
                        dataKey="data"
                        orientation="top"
                        tickMargin={15}
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis

                        domain={[0, 3]}

                        ticks={[1, 2, 3]}
                        tickFormatter={(value) => {
                            if (value === 1) return "Total";
                            if (value === 2) return "Parcial";
                            if (value === 3) return "Independente";
                        }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Bar
                        dataKey="valor"
                        barSize={35}
                    >
                        {data.map((entry, index) => (

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