import CardOrder from './CardOrder'
import { Order } from '@/types/OrderType'
import { BiSearchAlt } from 'react-icons/bi'

interface CardOrderListProps {
    orders: Order[]
    status: string
    searchTerm: string
}

export default function CardOrderList({ orders, status, searchTerm }: CardOrderListProps) {
    const filteredOrders = orders
        .filter((order) => status === 'Semua' || order.status === status)
        .filter((order) =>
            order.carts?.cartItems?.some((cartItem) => {
                return true
                const productName =
                    cartItem.variantOptionValues?.variantOptions.variant?.products?.name
                const productDescription =
                    cartItem.variantOptionValues?.variantOptions?.variant?.products?.description
                const variantOptionName = cartItem.variantOptionValues?.variantOptions?.name

                return (
                    productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    productDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    variantOptionName.toLowerCase().includes(searchTerm.toLowerCase())
                )
            })
        )

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
