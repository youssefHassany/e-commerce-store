"use client";

import React, { useEffect, useState } from "react";
import DivWrapper from "../div wrapper/DivWrapper";
import { getTopFiveProducts } from "@/hooks/getTopFiveProducts";
import { Product } from "@/types/product";
import PieChartGraph from "../graphs/PieChartGraph";
import Loader from "../common/Loader";
import { getTopExpensiveProducts } from "@/hooks/getTopExpensiveProducts";

const PieChartCard = () => {
  const [topFiveExpensiveProducts, setTopFiveExpensiveProducts] = useState<
    Product[] | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopFiveExpensiveProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const allProducts = await res.json();
        const topFive = getTopExpensiveProducts(allProducts, 5);
        setTopFiveExpensiveProducts(topFive);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTopFiveExpensiveProducts();
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
      <p className="text-center font-medium">Top 5 Expensive Products</p>
      {topFiveExpensiveProducts && (
        <PieChartGraph data={topFiveExpensiveProducts} />
      )}
    </DivWrapper>
  );
};

export default PieChartCard;
