import { Products } from "./ProductType";
import { VariantOptions } from "./VariantOptionType";

export type Variants = {
  id: number;
  name: string;
  isActive: boolean;
  productId: number;
  products?: Products[];
  variantOptions?: VariantOptions;
};
