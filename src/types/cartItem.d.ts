import { Product } from "./product";

interface ItemCapacity {
  capacity: number;
}

export type CartItemType = Product & ItemCapacity;
