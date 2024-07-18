import { Cart } from './CartType'
import { VariantTypeBySku } from './VariantTypeBySku'

export type ProductBySku = {
    id: number
    name: string
    description: string
    attachments: string[]
    isActive: boolean
    minimumOrder: number
    storeId: string
    category: string
    carts?: Cart
    variant?: VariantTypeBySku | null
}
