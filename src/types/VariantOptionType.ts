import { VariantOptionValues } from "./VariantOptionValueType";
import { Variants } from "./VariantType";

export type VariantOptions = {
  id: number;
  name: string;
  variantId: number;
  variant?: Variants[];
  variantOptionValues?: VariantOptionValues[];
};
