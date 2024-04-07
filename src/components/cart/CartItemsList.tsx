"use client";

import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            capacity={item.capacity}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
            description={item.description}
            id={item.id}
            rating={item.rating}
            key={item.id}
          />
        ))
      ) : (
        <>Your cart is empty</>
      )}
    </>
  );
};

export default CartItemsList;
