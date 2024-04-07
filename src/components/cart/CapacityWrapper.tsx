"use client";

import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import {
  decreaseItemCapacity,
  increaseItemCapacity,
} from "@/state/cart/cartSlice";
import { CartItemType } from "@/types/cartItem";

const CapacityWrapper = (props: CartItemType) => {
  const { capacity, price, category, description, id, image, rating, title } =
    props;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-center my-2">
        <Button
          className="bg-secondary text-secondary-foreground font-bold hover:bg-secondary-foreground hover:text-secondary"
          onClick={() => dispatch(decreaseItemCapacity({ ...props }))}
        >
          -
        </Button>
        <p className="mx-2">{capacity}</p>
        <Button
          className="bg-secondary text-secondary-foreground font-bold hover:bg-secondary-foreground hover:text-secondary"
          onClick={() => dispatch(increaseItemCapacity({ ...props }))}
        >
          +
        </Button>
      </div>

      <h3 className="text-center">{price * capacity} $</h3>
    </div>
  );
};

export default CapacityWrapper;
