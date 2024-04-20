export interface AdminCartItemType {
  id: number;
  userId: number;
  date: Date;
  products: [ProductInCartType];
}

export interface ProductInCartType {
  productId: number;
  quantity: number;
}
