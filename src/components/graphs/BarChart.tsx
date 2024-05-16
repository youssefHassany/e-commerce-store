import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

interface Props {
  data: any[];
  XKey: string;
  YKey: string;
}

const BarChartComponent = ({ data, XKey, YKey }: Props) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarChart data={data}>
        <XAxis dataKey={XKey} axisLine={true} fontSize={0} />
        <YAxis axisLine={true} />
        <Bar dataKey={YKey} fill="#16a34a" radius={4} />
        <Tooltip labelStyle={{ color: "#222" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
