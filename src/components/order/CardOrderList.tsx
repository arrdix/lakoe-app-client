import API from '@/networks/api'
import CardOrder from './CardOrder'
import { Order } from '@/types/OrderType'
import { BiSearchAlt } from 'react-icons/bi'
import { ProductBySku } from '@/types/ProductBySkuType'

interface CardOrderListProps {
    orders: Order[]
    status: string
    searchTerm: string
}

export default function CardOrderList({ orders, status, searchTerm }: CardOrderListProps) {
    const filteredOrders = orders
        .filter((order) => status === 'Semua' || order.status === status)
        .filter((order) => {
            return order.carts?.cartItems?.some(async (cartItem) => {
                const productSKU = cartItem.variantOptionValues?.sku
                if (productSKU) {
                    const product: ProductBySku = await API.PRODUCT.GET_ONE_BY_SKU(productSKU)

                    const reqProduct = product
                    const variantOption = product.variant && product.variant.variantOption

                    return (
                        reqProduct.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        reqProduct.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        variantOption?.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                }
            })
        })

    return (
        <div>
            {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => <CardOrder order={order} key={order.id} />)
            ) : (
                <div className="flex flex-row items-center justify-center gap-3 py-7">
                    <div>
                        <BiSearchAlt className="size-12" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Oops, pesanan yang kamu cari tidak ditemukan</p>
                        <p className="text-xs text-gray">Coba bisa cari dengan kata kunci lain</p>
                    </div>
                </div>
            )}
        </div>
    )
}
