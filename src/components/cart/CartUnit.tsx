import CartItemProduct from '@/components/cart/CartItemProduct'
import formatToIDR from '@/lib/IdrUtils'
import { CartItem } from '@/types/CartItemType'
import { FaStore } from 'react-icons/fa'

interface CartUnitProps {
    storeName: string
    cartItems: CartItem[]
    cartPrice: number
}

function CartUnit({ storeName, cartItems, cartPrice }: CartUnitProps) {
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
                <p className="text-base font-semibold">{formatToIDR(cartPrice)}</p>
            </div>
            <button className="bg-cyan w-full p-2 text-white font-medium rounded-md -mt-2 hover:bg-opacity-90">
                Checkout
            </button>
        </div>
    )
}

export default CartUnit
