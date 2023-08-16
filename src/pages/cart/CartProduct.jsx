import React, { useState } from "react";

const CartProduct = ({ product }) => {
  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="w-full bg-gray-200 shadow-lg p-4">
      <img src={product.image} className="w-20" />
      <p>{product.title}</p>

      <div className="flex gap-1 items-center my-6 bg-white w-fit">
        <button
          onClick={() => itemCount > 1 && setItemCount(itemCount - 1)}
          className="py-2 px-4 text-white bg-gray-800 rounded text-xl shadow hover:opacity-80 duration-100"
        >
          -
        </button>
        <p className="px-3">{itemCount}</p>
        <button
          onClick={() => setItemCount(itemCount + 1)}
          className="py-2 px-4 text-white bg-gray-800 rounded text-xl shadow hover:opacity-80 duration-100"
        >
          +
        </button>
      </div>

      <p className="font-bold">{product.price * itemCount}$</p>
    </div>
  );
};

export default CartProduct;
