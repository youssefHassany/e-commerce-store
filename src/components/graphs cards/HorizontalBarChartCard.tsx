"use client";

import React, { useEffect, useState } from "react";
import DivWrapper from "../div wrapper/DivWrapper";
import { Product } from "@/types/product";
import { getTopFiveProducts } from "@/hooks/getTopFiveProducts";
import HorizontalBarChart from "../graphs/HorizontalBarChart";
import Loading from "@/app/loading";

const HorizontalBarChartCard = () => {
  const [topFiveProducts, setTopFiveProducts] = useState<
    Product[] | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopFiveProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const allProducts = await res.json();
        const topFive = getTopFiveProducts(allProducts, 10);
        setTopFiveProducts(topFive);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTopFiveProducts();
  }, []);

  if (loading) {
    return (
      <DivWrapper>
        <div className="h-full flex flex-col justify-center items-center">
          <Loading />
        </div>
      </DivWrapper>
    );
  }

  if (error) {
    return <DivWrapper>{error}</DivWrapper>;
  }
  return (
    <DivWrapper>
      <p className="text-center font-medium">Top 10 Rated Products</p>
      {topFiveProducts && (
        <HorizontalBarChart
          data={topFiveProducts}
          dataTarget="rating.rate"
          toolTip
          tooltipTarget="title"
        />
      )}
    </DivWrapper>
  );
};

export default HorizontalBarChartCard;
