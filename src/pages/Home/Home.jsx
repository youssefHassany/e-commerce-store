import React, { useEffect, useState } from "react";
import Search from "./Search";
import Products from "./Products";

const Home = () => {
  return (
    <section className="max-w-screen bg-cover min-h-screen">
      <Search />
      <Products />
    </section>
  );
};

export default Home;
