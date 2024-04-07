import React from "react";
import CapacityWrapper from "./CapacityWrapper";
import { CartItemType } from "@/types/cartItem";
import RemoveItemFromCart from "./RemoveItemFromCart";

const CartItem = (props: CartItemType) => {
  const { title, image, price, id, capacity, category, description, rating } =
    props;
  return (
    <div className="relative p-4 w-full border border-zinc-700 rounded mb-2 shadow flex flex-col-reverse lg:flex-row justify-between items-center ">
      <RemoveItemFromCart {...props} />

      <div>
        <h3 className="text-lg p-2">{title}</h3>
        <CapacityWrapper {...props} />
      </div>

      <img src={image} className="w-28" />
    </div>
  );
};

export default CartItem;
