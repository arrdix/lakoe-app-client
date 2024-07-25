import CardOrder from './CardOrder'
import { Order } from '@/types/OrderType'
import { BiChat } from 'react-icons/bi'

interface CardOrderListProps {
    orders: Order[]
    status: string
    searchTerm: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CardOrderList({ orders, status }: CardOrderListProps) {
    const filteredOrders = orders.filter((order) => status === 'Semua' || order.status === status)

    return (
        <div>
            {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => <CardOrder order={order} key={order.id} />)
            ) : (
                <div className="flex flex-row items-center justify-center gap-3 py-7">
                    <div>
                        <BiChat className="size-12" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Oops, kamu belum punya pesanan</p>
                        <p className="text-xs text-gray">
                            Nantinya kamu akan bisa melihat daftar pesanan kamu di sini.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
