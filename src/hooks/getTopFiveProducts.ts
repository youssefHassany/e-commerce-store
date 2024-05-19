import { Product } from "@/types/product";

export const getTopFiveProducts = (products: Product[], num: number) => {
  const sortedProducts = products
    .sort((a, b) => a.rating.rate - b.rating.rate)
    .reverse()
    .slice(0, num);

  return sortedProducts;
};
