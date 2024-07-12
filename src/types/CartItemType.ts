import { VariantOptionValues } from "./VariantOptionValueType";

export type CartItems = {
  id: number;
  qty: number;
  price: number;
  cartId: number;
  userId: number;
  storeId: number;
  variantOptionValueId: number;
  variantOptionValues?: VariantOptionValues;
};
