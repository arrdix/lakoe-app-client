import { CartItem } from "./CartItemType";

export type Cart = {
  id: number;
  price: number;
  discount: number;
  userId: number;
  storeId: number;
  cartItems?: CartItem[];
};
