import CartUnit from '@/components/cart/CartUnit'
import API from '@/networks/api'
import { Cart } from '@/types/CartType'
import { Store } from '@/types/StoreType'
import { useEffect, useState } from 'react'

interface CartListProps {
    carts: Cart[]
}

interface CartData {
    storeName: string
    cart: Cart
}

function CartList({ carts }: CartListProps) {
    const [cartData, setCartData] = useState<CartData[]>([])

    useEffect(() => {
        async function fetchStoreData() {
            const cartData = await Promise.all(
                carts.map(async (cart) => {
                    const store: Store = await API.STORE.FIND_ONE_BY_ID(cart.storeId)
                    return { storeName: store.name, cart }
                })
            )
            setCartData(cartData)
        }

        fetchStoreData()
    }, [carts])

    return (
        <>
            {cartData.map(({ storeName, cart }) => {
                if (cart.cartItems?.length) {
                    return (
                        <CartUnit
                            key={cart.id}
                            storeName={storeName}
                            cartItems={cart.cartItems}
                            cart={cart}
                        />
                    )
                }
            })}
        </>
    )
}

export default CartList
