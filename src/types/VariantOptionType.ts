import { VariantOptionValue } from './VariantOptionValueType'

export type VariantOption = {
    id: number
    name: string
    variantId: number
    variantOptionValue?: VariantOptionValue // Perubahan disini untuk mengikuti tipe data dari VariantOptionValue
}
