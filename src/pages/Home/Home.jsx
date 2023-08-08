import React, { useEffect, useState } from "react";
import Search from "./Search";
import Products from "./Products";

const Home = () => {
  const API_URL = "http://localhost:3500/products";

  const [productsData, setProductsData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProductsData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  return (
    <section className="max-w-screen bg-cover min-h-screen">
      <Search />
      <Products productsData={productsData} />
    </section>
  );
};

export default Home;
