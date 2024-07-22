import { ProductByOrder } from "./ProductByOrder";

export type VariantByOrder = {
  id: number;
  name: string;
  isActive: boolean;
  productId: number;
  productByOrders: ProductByOrder;
};
