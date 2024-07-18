import { VariantOption } from './VariantOptionType'

export type VariantTypeBySku = {
    id: number
    name: string
    isActive: boolean
    productId: number
    variantOption?: VariantOption
}
