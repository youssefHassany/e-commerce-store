import { AdminCartItemType } from "@/types/AdminCartItem";
import { Product } from "@/types/product";

export interface ProductWithQuantity {
  title: string;
  quantity: number;
}

export async function getProductQuantityInCart(): Promise<
  ProductWithQuantity[]
> {
  try {
    // Fetch the carts data
    const response = await fetch("https://fakestoreapi.com/carts");
    const carts: AdminCartItemType[] = await response.json();

    // Array to store product information
    let productsWithQuantity: ProductWithQuantity[] = [];

    // Loop through each cart
    for (const cart of carts) {
      // Loop through each product in the cart
      for (const product of cart.products) {
        // Fetch product details using productId
        const productResponse = await fetch(
          `https://fakestoreapi.com/products/${product.productId}`
        );
        const productDetails: Product = await productResponse.json();

        // Push product title and quantity into the result array
        productsWithQuantity.push({
          title: productDetails.title,
          quantity: product.quantity,
        });
      }
    }

    return productsWithQuantity;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
