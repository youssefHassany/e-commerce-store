"use client";

import ProductCard from "@/components/product card/ProductCard";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function SearchList({ params }: { params: { title: string } }) {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const filterProducts = async () => {
      try {
        // get all products
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products: Product[] = await response.json();

        // filter products that has the search value
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(params.title.toLowerCase())
        );
        setSearchResults(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    filterProducts();
  }, []);

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-8 bg-zinc-900 text-secondary">
      <h1 className="p-3 text-lg text-center">
        Search Results: {searchResults.length}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {searchResults.map((product, idx) => (
          <ProductCard
            category={product.category}
            id={product.id}
            image={product.image}
            index={idx}
            price={product.price}
            title={product.title}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
