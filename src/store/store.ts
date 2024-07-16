import { User } from '@/types/UserType'
import { create } from 'zustand'

interface Store {
    loggedUser: User | null
    setLoggedUser: (user: User) => void
}

export const useLakoeStore = create<Store>((set) => ({
    loggedUser: null,
    setLoggedUser: (user) => set(() => ({ loggedUser: user })),
}))
