"use client";

import { addItemToCart } from "@/state/cart/cartSlice";
import { Button } from "../ui/button";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

interface ItemCapacity {
  capacity: number;
}

const AddToCartButton = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  const dispatch = useDispatch();

  const product: Product & ItemCapacity = {
    capacity: 0,
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
  };

  return (
    <Button
      onClick={() => {
        dispatch(addItemToCart(product));
        toast("Added Successfully!", {
          description: "Item Added To Cart",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
