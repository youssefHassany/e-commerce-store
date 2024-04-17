"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  searchVal: string;
}

const SearchSuggestion = ({ searchVal }: Props) => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const products: Product[] = await response.json();
      const searchItems = products.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
      );
      setSearchResults(searchItems);
    };

    fetchAndFilterProducts();
  }, [searchResults]);
  return (
    <div
      className={`${
        searchVal.length === 0 && "hidden"
      } w-full overflow-y-scroll max-h-56 absolute bottom-0 bg-zinc-900 border border-secondary rounded-lg translate-y-full p-4 flex flex-col gap-3`}
    >
      {searchResults.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full flex items-center justify-between p-1 hover:bg-zinc-700 rounded"
        >
          <img src={item.image} alt={item.title} className="w-8" />
          <p className="text-xs">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestion;
