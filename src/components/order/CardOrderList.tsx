import CardOrder from "./CardOrder"
import { Order } from "@/types/OrderType"

interface CardOrderListProps {
    orders: Order[]
    status: string
}

export default function CardOrderList({ orders, status }: CardOrderListProps) {
    return (
        <div>
            {orders
                .filter(order => status === 'Semua' || order.status === status)
                .map(order => (
                    <CardOrder order={order} key={order.id} />
                ))}
        </div>
    )
}
