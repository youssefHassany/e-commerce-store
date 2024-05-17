import { Product } from "@/types/product";
import React from "react";
import { ResponsiveContainer, Pie, PieChart, Tooltip } from "recharts";

interface PieProps {
  data: Product[];
}

const PieChartGraph = ({ data }: PieProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey={"price"}
          nameKey={"title"}
          fill="#16a34a"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartGraph;
