import CartUnit from '@/components/cart/CartUnit'
import { Cart } from '@/types/CartType'

interface CartListProps {
    carts: Cart[]
}

function CartList({ carts }: CartListProps) {
    return (
        <>
            {carts.map((cart) => {
                const store = 'Lakoe'
                const cartItem = cart.cartItems

                if (cartItem) {
                    return <CartUnit storeName={store} cartItems={cartItem} cart={cart} />
                }
            })}
        </>
    )
}

export default CartList
