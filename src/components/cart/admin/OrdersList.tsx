"use client";

import { ProductInCartType } from "@/types/AdminCartItem";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";

const OrdersList = (product: ProductInCartType) => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async (id: number) => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data: Product = await res.json();
        setProductDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProduct(product.productId);
  }, [productDetails, product]);

  return (
    <div className="flex gap-2 bg-zinc-800 my-2 p-3 rounded">
      {!productDetails ? (
        "Loading..."
      ) : (
        <div className="w-full flex items-center justify-between gap-2">
          <p>
            {product.quantity}x {productDetails?.title}
          </p>
          {productDetails && <img src={productDetails.image} className="w-8" />}
        </div>
      )}
    </div>
  );
};

export default OrdersList;
