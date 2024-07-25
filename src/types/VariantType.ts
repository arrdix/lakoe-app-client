import { VariantOption } from './VariantOptionType'

export type Variant = {
    id: number
    name: string
    isActive: boolean
    productId: number
    variantOptions?: VariantOption[] // Perubahan disini untuk mengikuti tipe data dari VariantOption sebagai array
}
