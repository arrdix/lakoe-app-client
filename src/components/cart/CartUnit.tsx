import CartItemProduct from '@/components/cart/CartItemProduct'
import formatToIDR from '@/lib/IdrUtils'
import { CartItem } from '@/types/CartItemType'
import { Cart } from '@/types/CartType'
import { FaStore } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface CartUnitProps {
    storeName: string
    cartItems: CartItem[]
    cart: Cart
}

function CartUnit({ storeName, cartItems, cart }: CartUnitProps) {
    const navigate = useNavigate()

    function onCartCheckout() {
        navigate('/checkout', {
            state: {
                cart,
            },
        })
    }

    return (
        <div className="flex flex-col gap-4 w-full text-black">
            <div className="flex items-center gap-2">
                <FaStore className="size-6" />
                <h3 className="text-lg font-bold">{storeName}</h3>
            </div>
            {cartItems.map((cartItem) => {
                const sku = cartItem.variantOptionValues && cartItem.variantOptionValues.sku
                const qty = cartItem.qty
                const price = cartItem.price

                if (sku) {
                    return <CartItemProduct sku={sku} qty={qty} price={price} />
                }
            })}
            <div className="flex flex-row justify-between items-center">
                <p className="text-base font-semibold">Total</p>
                <p className="text-base font-semibold">{formatToIDR(cart.price)}</p>
            </div>
            <button
                className="bg-cyan w-full p-2 text-white font-medium rounded-md -mt-2 hover:bg-opacity-90"
                onClick={onCartCheckout}
            >
                Checkout
            </button>
        </div>
    )
}

export default CartUnit
