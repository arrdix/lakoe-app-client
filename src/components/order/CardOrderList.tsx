import CardOrder from "./CardOrder";
import { Order } from "@/types/OrderType";

interface CardOrderListProps {
    orders: Order[];
    status: string;
    searchTerm: string;
}

export default function CardOrderList({ orders, status, searchTerm }: CardOrderListProps) {
    return (
        <div>
            {orders
                .filter(order => status === 'Semua' || order.status === status)
                .filter(order =>
                    order.carts?.cartItems?.some(cartItem => {
                        const productName = cartItem.variantOptionValues?.variantOptions.variant?.products?.name || '';
                        const productDescription = cartItem.variantOptionValues?.variantOptions?.variant?.products?.description || '';
                        const variantOptionName = cartItem.variantOptionValues?.variantOptions?.name || '';

                        return (
                            productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            productDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            variantOptionName.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                    })
                )
                .map(order => (
                    <CardOrder order={order} key={order.id} />
                ))}
        </div>
    );
}
