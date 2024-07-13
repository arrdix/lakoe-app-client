import { Cart } from './CartType'
import { Variant } from './VariantType'

export type Product = {
    id: number
    name: string
    description: string
    attachments: string[]
    isActive: boolean
    minimunOrder: number
    storeId: string
    carts?: Cart
    variant?: Variant
}
