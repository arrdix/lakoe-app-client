import { VariantOptionByOrder } from "./VariantOptionByOrderType";

export type VariantOptionValueByOrder = {
  id: number;
  sku: string;
  weight: number;
  stock: number;
  price: number;
  isActive: boolean;
  variantOptionByOrders: VariantOptionByOrder;
};
