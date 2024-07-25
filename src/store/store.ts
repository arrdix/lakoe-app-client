import { CartItem } from '@/types/CartItemType'
import { Cart } from '@/types/CartType'
import { User } from '@/types/UserType'
import { create } from 'zustand'

interface Store {
    loggedUser: User | null
    setLoggedUser: (user: User | null) => void
    carts: Cart[]
    setCarts: (carts: Cart[]) => void
    addCart: (cart: Cart) => void
    addCartItem: (cartItem: CartItem) => void
}

export const useLakoeStore = create<Store>((set) => ({
    loggedUser: null,
    setLoggedUser: (user) =>
        set(() => ({
            loggedUser: user,
        })),

    carts: [],
    setCarts: (carts: Cart[]) => set(() => ({ carts: carts })),
    addCart: (cart: Cart) =>
        set((state) => ({
            carts: [...state.carts, cart],
        })),
    addCartItem: (newCartItem: CartItem) =>
        set((state) => ({
            carts: state.carts.map((cart) => {
                if (newCartItem.cartId === cart.id) {
                    return {
                        ...cart,
                        cartItems: cart.cartItems
                            ? [...cart.cartItems, newCartItem]
                            : [newCartItem],
                    }
                }
                return cart
            }),
        })),
}))
