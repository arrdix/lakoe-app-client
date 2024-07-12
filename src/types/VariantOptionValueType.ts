import { VariantOption } from './VariantOptionType'

export type VariantOptionValue = {
    id: number
    sku: string
    weight: number
    stock: number
    price: number
    isActive: boolean
    variantOptionId: number
    variantOptions?: VariantOption[]
}
