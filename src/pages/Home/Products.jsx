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
          className="bg-gray-100 shadow-lg flex flex-col items-center justify-between rounded p-2 hover:shadow-xl hover:bg-gray-300 duration-200 h-96"
        >
          <img src={item.image} className="w-32 " />
          <p className="text-lg text-center">{item.title}</p>
          <h2 className="font-bold ">{item.price} $</h2>
        </Link>
      ))}
    </div>
  );
};

export default Products;
