import { VariantOptionValueByOrder } from "./VariantOptionValueByOrderType";

export type CartItemByOrder = {
  id: number;
  qty: number;
  price: number;
  cartId: number;
  userId: number;
  storeId: number;
  variantOptionValueId: number;
  variantOptionValueByOrders?: VariantOptionValueByOrder[];
};
