import { VariantOption } from './VariantOptionType'

export type Variant = {
    id: number
    name: string
    isActive: boolean
    productId: number
    variantOption?: VariantOption
}
