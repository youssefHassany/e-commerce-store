"use client";

import { removeItemFromCart } from "@/state/cart/cartSlice";
import { CartItemType } from "@/types/cartItem";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const RemoveItemFromCart = (props: CartItemType) => {
  const { capacity, price, category, description, id, image, rating, title } =
    props;
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(removeItemFromCart({ ...props }))}
      className="text-xs p-2 rounded-full absolute top-0 right-0 bg-zinc-700 translate-x-1 -translate-y-2 hover:bg-opacity-60 duration-150"
    >
      <FaRegTrashCan />
    </button>
  );
};

export default RemoveItemFromCart;
