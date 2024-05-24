import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Heading from "../../ui/Heading";

const SuppliesPieChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://resilience-backend.vercel.app/supplies")
      .then((response) => response.json())
      .then((supplies) => {
        const aggregatedData = supplies.reduce((acc, supply) => {
          const category = supply.category;
          const amount = parseInt(supply.amount.replace(/\D/g, ""), 10);

          const existingCategory = acc.find((item) => item.name === category);
          if (existingCategory) {
            existingCategory.value += isNaN(amount) ? 1 : amount;
          } else {
            acc.push({ name: category, value: isNaN(amount) ? 1 : amount });
          }

          return acc;
        }, []);

        console.log("Aggregated data:", aggregatedData);
        setData(aggregatedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#DE76A3",
    "#00FB3A",
    "#FF0000",
    "#401D3E",
    "#FF8046",
    "#FF8047",
    "#FF8048",
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[450px] mx-auto overflow-x-scroll">
      <Heading title="PieChart" />
      <PieChart width={450} height={500} className="mx-auto">
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default SuppliesPieChart;
