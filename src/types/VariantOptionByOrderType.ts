import { VariantByOrder } from "./VariantByOrderType";

export type VariantOptionByOrder = {
  id: number;
  name: string;
  variantId: number;
  variantByOrders?: VariantByOrder;
};
