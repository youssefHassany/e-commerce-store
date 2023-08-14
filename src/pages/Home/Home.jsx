import React, { useEffect, useState } from "react";
import Search from "./Search";
import Products from "./Products";
import FilterProducts from "../../components/FilterProducts";

const Home = () => {
  return (
    <section className="max-w-screen bg-cover min-h-screen">
      <Search />
      <FilterProducts />
      <Products />
    </section>
  );
};

export default Home;
