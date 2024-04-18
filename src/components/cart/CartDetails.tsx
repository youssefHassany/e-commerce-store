"use client";

import { RootState } from "@/state/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { clearCart } from "@/state/cart/cartSlice";
import { toast } from "sonner";
import PurchaseMessage from "../purchase message/PurchaseMessage";

const CartDetails = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        const itemPrice = items[i].capacity * items[i].price;
        total += itemPrice;
      }
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [items]);

  // if there's no items in cart don't show anything
  if (items.length === 0) {
    return "";
  }

  return (
    <div className="sticky bottom-0 left-0 w-full bg-zinc-900 bg-opacity-90 p-3 rounded">
      <p className="text-center p-2">Total Price: {totalPrice}</p>
      <div className="flex justify-evenly">
        {/* <Button>Purchase</Button> */}
        <PurchaseMessage />
        <Button
          onClick={() => {
            dispatch(clearCart());
            toast("Your Cart is Cleared");
          }}
          className="bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartDetails;
