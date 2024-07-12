import { Carts } from "./CartType";
import { Variants } from "./VariantType";

export type Products = {
  id: number;
  name: string;
  description: string;
  attachments: string[];
  isActive: boolean;
  minimunOrder: number;
  storeId: string;
  carts?: Carts;
  variants?: Variants[];
};
