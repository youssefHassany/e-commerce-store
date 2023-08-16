import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchedDataContext } from "../../App";
import { AiTwotoneStar } from "react-icons/ai";
import Loading from "../../components/loading/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { id } = useParams();
  const { productsData, sendProductToCart } = useContext(FetchedDataContext);

  const [currentProductData, setCurrentProductData] = useState(null);

  useEffect(() => {
    const filteredProduct = productsData.find((product) => product.id == id);
    setCurrentProductData(filteredProduct);
  }, [productsData, id]);

  if (!currentProductData) {
    return (
      <div className="mt-20">
        <Loading />
      </div>
    );
  }

  const printRatingStars = (rate) => {
    let stars = [];

    for (let i = 0; i < Math.round(rate); i++) {
      stars = [
        ...stars,
        <AiTwotoneStar key={i} className="inline-block text-amber-400" />,
      ];
    }

    return stars;
  };

  return (
    <div className="mt-14 w-11/12 mx-auto bg-gray-200 shadow-lg p-4 rounded min-h-screen text-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 my-12 text-left">
        <>
          <img
            src={currentProductData.image}
            className=" w-80"
            alt={currentProductData.title}
          />
        </>

        <ul className="font-medium">
          <li className="mb-3" key={16}>
            Name: {currentProductData.title}
          </li>
          <li className="mb-3" key={26}>
            Price: {currentProductData.price} $
          </li>
          <li className="mb-3" key={46}>
            Rating: {currentProductData.rating.rate} (
            {currentProductData.rating.count})
            <p>{printRatingStars(currentProductData.rating.rate)}</p>
          </li>
          <li className="mb-3" key={36}>
            About: {currentProductData.description}
          </li>
        </ul>
      </div>

      <button
        onClick={() => {
          sendProductToCart(currentProductData);
          toast.success("Product added to your cart");
        }}
        className="px-3 py-1 rounded my-2 mx-auto border-2 border-red-700 text-red-700 font-medium relative hover:text-white z-10
                       before:absolute before:bg-red-700 before:top-0 before:left-0 before:w-0 before:h-full before:duration-300 before:z-[-1] before:hover:w-full"
      >
        Add To Cart
      </button>
      <ToastContainer />
    </div>
  );
};

export default Product;
