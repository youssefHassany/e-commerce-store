import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchedDataContext } from "../../App";

const Product = () => {
  const { id } = useParams();
  const { productsData } = useContext(FetchedDataContext);

  const [currentProductData, setCurrentProductData] = useState(null);

  useEffect(() => {
    const filteredProduct = productsData.find((product) => product.id == id);
    setCurrentProductData(filteredProduct);
  }, [productsData, id]);

  if (!currentProductData) {
    return <div className="mt-20">Loading...</div>;
  }

  return (
    <div className="mt-14 w-11/12 mx-auto bg-gray-200 shadow-lg p-4 flex flex-col lg:flex-row justify-between items-center gap-10 rounded min-h-screen">
      <>
        <img
          src={currentProductData.image}
          className=" w-80"
          alt={currentProductData.title}
        />
      </>

      <ul className="font-medium">
        <li className="mb-3">Name: {currentProductData.title}</li>
        <li className="mb-3">Price: {currentProductData.price} $</li>
        <li className="mb-3">About: {currentProductData.description}</li>
      </ul>
    </div>
  );
};

export default Product;
