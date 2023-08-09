import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FetchedDataContext } from "../../App";

const Products = () => {
  const { productsData } = useContext(FetchedDataContext);

  return (
    <div className="w-4/5 sm:w-11/12 mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productsData.map((item, index) => (
        <Link
          to={`/product/${item.id}`}
          key={index}
          className="bg-gray-100 shadow-lg flex flex-col items-center rounded p-2"
        >
          <img src={item.imgSrc} className="w-44 mb-2" />
          <p className="text-2xl mb-2">{item.name}</p>
          <h2 className="font-bold mb-2">{item.price} $</h2>
          <button
            className="px-3 py-1 rounded my-2 border-2 border-red-700 text-red-700 font-medium relative hover:text-white z-10
                       before:absolute before:bg-red-700 before:top-0 before:left-0 before:w-0 before:h-full before:duration-300 before:z-[-1] before:hover:w-full"
          >
            Add To Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Products;
