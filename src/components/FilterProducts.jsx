import React, { useContext, useEffect, useState } from "react";
import { FetchedDataContext } from "../App";

const FilterProducts = () => {
  const { productsData, setProductsData, fetchData, API_URL } =
    useContext(FetchedDataContext);
  const [categories, setCategories] = useState([]);

  const dataSet = new Set();

  const filterProductsData = (categ) => {
    const filteredProd = productsData.filter((prod) => prod.category === categ);
    setProductsData(filteredProd);
  };

  const addCategoriesToSet = () => {
    for (let i = 0; i < productsData.length; i++) {
      dataSet.add(productsData[i].category);
    }

    setCategories(Array.from(dataSet));
  };

  useEffect(() => {
    addCategoriesToSet();
  }, [productsData]); // Only run this effect when productsData changes

  return (
    <div className="w-10/12 p-4 bg-gray-200 rounded mx-auto my-5 text-center flex justify-between gap-2 overflow-x-scroll">
      <button
        onClick={() => setProductsData(fetchData(API_URL))}
        className={`flex-1 p-3 bg-white shadow-lg duration-150 hover:-translate-y-1 font-medium rounded`}
      >
        All Items
      </button>
      {categories.map((categ, idx) => (
        <button
          key={idx * 20}
          onClick={() => filterProductsData(categ)}
          className={`flex-1 p-3 bg-white shadow-lg duration-150 hover:-translate-y-1 font-medium rounded`}
        >
          {categ}
        </button>
      ))}
    </div>
  );
};

export default FilterProducts;
