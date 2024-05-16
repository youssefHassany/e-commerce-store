"use client";

import React, { useEffect, useState } from "react";
import DivWrapper from "../div wrapper/DivWrapper";
import BarChartComponent from "../graphs/BarChart";
import {
  useGetProductQuantityInCart,
  ProductWithQuantity,
} from "@/hooks/useGetProductunatityInCart";

const BarChart = () => {
  const [barChartData, setBarChartData] = useState<ProductWithQuantity[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await useGetProductQuantityInCart();
      console.log(data);
      setBarChartData(data);
    };

    fetchProductsData();
  }, []);

  return (
    <DivWrapper>
      <p className="text-center font-medium text-lg">Products Sold</p>

      {barChartData ? (
        <BarChartComponent data={barChartData} XKey="title" YKey="quantity" />
      ) : (
        "Error"
      )}
    </DivWrapper>
  );
};

export default BarChart;
