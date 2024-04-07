import { Product } from "@/types/product";
import React from "react";
import ProductCard from "../product card/ProductCard";

interface Props {
  param: string;
}

const ProductsList = async ({ param }: Props) => {
  const response = await fetch(`https://fakestoreapi.com/products${param}`);
  const products: Product[] = await response.json();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
      {products.map((product, idx) => (
        <ProductCard
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
          category={product.category}
          key={product.id}
          index={idx}
        />
      ))}
    </div>
  );
};

export default ProductsList;
