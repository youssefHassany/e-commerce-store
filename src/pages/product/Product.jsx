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
    <div className="mt-14 w-11/12 sm:w-3/5 mx-auto bg-gray-200 shadow-lg p-4 flex flex-col lg:flex-row justify-between items-center gap-4 rounded min-h-screen">
      <>
        <img
          src={currentProductData.imgSrc}
          className=" w-80"
          alt={currentProductData.name}
        />
      </>

      <ul className="md:text-xl font-medium">
        <li className="mb-3">Name: {currentProductData.name}</li>
        <li className="mb-3">Price: {currentProductData.price} $</li>
        <li className="mb-3">About: {currentProductData.about}</li>
      </ul>
    </div>
  );
};

export default Product;
