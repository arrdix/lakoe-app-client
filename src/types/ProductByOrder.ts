import { Cart } from "./CartType";
import { VariantByOrder } from "./VariantByOrderType";

export type ProductByOrder = {
  id: number;
  name: string;
  description: string;
  attachments: string[];
  isActive: boolean;
  minimumOrder: number;
  storeId: string;
  category: string;
  carts?: Cart;
  variantByOrders?: VariantByOrder | null;
};
