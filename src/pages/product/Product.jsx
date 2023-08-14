import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchedDataContext } from "../../App";
import { AiTwotoneStar } from "react-icons/ai";

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

  const printRatingStars = (rate) => {
    let stars = [];

    for (let i = 0; i < Math.round(rate); i++) {
      stars = [
        ...stars,
        <AiTwotoneStar className="inline-block text-amber-400" />,
      ];
    }

    return stars;
  };

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
        <li className="mb-3" key={16}>
          Name: {currentProductData.title}
        </li>
        <li className="mb-3" key={26}>
          Price: {currentProductData.price} $
        </li>
        <li className="mb-3" key={36}>
          About: {currentProductData.description}
        </li>
        <li className="mb-3" key={46}>
          Rating: {currentProductData.rating.rate} (
          {currentProductData.rating.count})
          <p>{printRatingStars(currentProductData.rating.rate)}</p>
        </li>
      </ul>
    </div>
  );
};

export default Product;
