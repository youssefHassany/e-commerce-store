import { Product } from "@/types/product";

export const getTopExpensiveProducts = (products: Product[], num?: number) => {
  let sortedProducts = products.sort((a, b) => a.price - b.price).reverse();

  if (num) {
    sortedProducts = sortedProducts.slice(0, num);
  }

  return sortedProducts;
};
