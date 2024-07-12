import { CartItems } from "./CartItemType";

export type Carts = {
  id: number;
  price: number;
  discount: number;
  userId: number;
  storeId: number;
  cartItems?: CartItems[];
};
