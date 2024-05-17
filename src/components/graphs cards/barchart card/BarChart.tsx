"use client";

import React, { useEffect, useState } from "react";
import DivWrapper from "../../div wrapper/DivWrapper";
import BarChartComponent from "../../graphs/BarChart";
import {
  getProductQuantityInCart,
  ProductWithQuantity,
} from "@/hooks/getProductQuantityInCart";
import Loader from "../../common/Loader";

const BarChart = () => {
  const [barChartData, setBarChartData] = useState<ProductWithQuantity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await getProductQuantityInCart();
        setBarChartData(data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  if (loading) {
    return (
      <DivWrapper>
        <Loader />
      </DivWrapper>
    );
  }

  if (error) {
    return <DivWrapper>{error}</DivWrapper>;
  }

  return (
    <DivWrapper>
      <p className="text-center font-medium text-lg">Products Sold</p>
      {barChartData.length > 0 ? (
        <BarChartComponent data={barChartData} XKey="title" YKey="quantity" />
      ) : (
        "No data available"
      )}
    </DivWrapper>
  );
};

export default BarChart;
