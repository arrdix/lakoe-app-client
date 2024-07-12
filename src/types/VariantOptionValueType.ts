import { VariantOptions } from "./VariantOptionType";

export type VariantOptionValues = {
  id: number;
  sku: string;
  weight: number;
  stock: number;
  price: number;
  isActive: boolean;
  variantOptionId: number;
  variantOptions?: VariantOptions[];
};
