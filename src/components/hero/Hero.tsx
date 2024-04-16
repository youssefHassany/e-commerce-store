import type { Product } from "@/types/product";
import React from "react";
import Rating from "../rating/Rating";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const Hero = (props: Product) => {
  const { price, category, description, id, image, rating, title } = props;
  return (
    <section className="w-full min-h-[80vh] rounded p-4 bg-zinc-800 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
      <img src={image} alt={title} className="w-48" />

      <div>
        <h1 className="text-secondary font-bold text-xl md:text-3xl">
          {title}
        </h1>
        <p className="text-gray-400 my-4 text-xs md:text-lg">{description}</p>
        <Rating rating={rating} />
        <h3 className="text-xl">Price: {price}$</h3>
        <div className="my-3">
          <AddToCartButton {...props} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
