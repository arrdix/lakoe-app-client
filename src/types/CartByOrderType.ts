import { CartItemByOrder } from "./CartItemByOrderType";

export type CartByOrder = {
  id: number;
  price: number;
  discount: number;
  userId: number;
  storeId: number;
  cartItemByOrders?: CartItemByOrder[];
};
