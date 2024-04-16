"use client";

import { addItemToCart, removeItemFromCart } from "@/state/cart/cartSlice";
import { Button } from "../ui/button";
import type { Product } from "@/types/product";
import type { CartItemType } from "@/types/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { RootState } from "@/state/store";

const AddToCartButton = (props: Product) => {
  const { price, category, description, id, image, rating, title } = props;
  const products = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const product: CartItemType = {
    capacity: 0,
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
  };

  const sendToast = () => {
    // Check if product with the same id already exists in the cart
    const productInCart = products.find((item) => item.id === product.id);

    if (productInCart) {
      toast("Already Exist!", {
        description: "Item is already Added To Cart",
      });
    } else {
      dispatch(addItemToCart(product));

      toast("Added Successfully!", {
        description: "Item Added To Cart",
        action: {
          label: "Undo",
          onClick: () => dispatch(removeItemFromCart(product)),
        },
      });
    }
  };

  return (
    <Button
      onClick={() => {
        sendToast();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
