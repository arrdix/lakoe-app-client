import { VariantOptionValue } from './VariantOptionValueType'

export type CartItem = {
    id: number
    qty: number
    price: number
    cartId: number
    userId: number
    storeId: number
    variantOptionValueId: number
    variantOptionValues?: VariantOptionValue
}
