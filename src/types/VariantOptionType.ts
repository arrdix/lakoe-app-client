import { VariantOptionValue } from './VariantOptionValueType'
import { Variant } from './VariantType'

export type VariantOption = {
    id: number
    name: string
    variantId: number
    variants?: Variant[]
    variantOptionValue?: VariantOptionValue
}
