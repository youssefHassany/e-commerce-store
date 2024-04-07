import { Product } from "@/types/product";
import React from "react";
import Rating from "../rating/Rating";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const Hero = ({
  title,
  category,
  description,
  image,
  price,
  rating,
  id,
}: Product) => {
  return (
    <section className="w-full min-h-[80vh] rounded p-4 bg-zinc-800 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
      <img src={image} alt={title} className="w-48" />

      <div>
        <h1 className="text-secondary font-bold text-3xl">{title}</h1>
        <p className="text-gray-400 my-4">{description}</p>
        <Rating rating={rating} />
        <h3 className="text-xl">Price: {price}$</h3>
        <div className="my-3">
          <AddToCartButton
            id={id}
            title={title}
            category={category}
            description={description}
            image={image}
            price={price}
            rating={rating}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
