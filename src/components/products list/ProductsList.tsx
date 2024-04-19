"use client";

import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import ProductCard from "../product card/ProductCard";

interface Props {
  param: string;
}

const ProductsList = ({ param }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products${param}`);
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [products]);

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
