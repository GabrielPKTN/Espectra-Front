import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const data = [
    {
        data: "20/03/2026",
        valor: 1,
        color: "#FF2D2D"
    },
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
    },
    {
        data: "20/03/2026",
        valor: 3,
        color: "#A2E289"
    }
]

function GraficoTentativas(){
    return (
        <div className="w-full h-[500px] bg-[#ECECEC] p-5 rounded-xl">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid vertical={false}/>

                    <XAxis 
                        dataKey="data"
                        tickLine={false}
                        axisLine={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraficoTentativas;