import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AiFillShopping } from 'react-icons/ai'
import { useLakoeStore } from '@/store/store'
import LOCAL_STORAGE from '@/networks/storage'
import { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import CartList from '@/components/cart/CartList'
import { Cart } from '@/types/CartType'
import API from '@/networks/api'
import { Toaster } from '@/components/ui/toaster'

function BuyerLayout() {
    const loggedUser = useLakoeStore((state) => state.loggedUser)
    const setLoggedUser = useLakoeStore((state) => state.setLoggedUser)
    const carts: Cart[] = useLakoeStore((state) => state.carts)
    const setCarts = useLakoeStore((state) => state.setCarts)

    const [atLandingPage, setIsAtLandingPage] = useState<boolean>(true)
    const { pathname } = useLocation()

    const navigate = useNavigate()

    function onLogout() {
        LOCAL_STORAGE.REMOVE()
        setLoggedUser(null)

        navigate('/')
    }

    useEffect(() => {
        if (pathname === '/') {
            setIsAtLandingPage(true)
        } else {
            setIsAtLandingPage(false)
        }
    }, [pathname])

    useEffect(() => {
        async function GET_CARTS() {
            if (loggedUser) {
                const carts: Cart[] = await API.CART.FIND_ALL_UNCOMPLETE()
                console.log(carts)
                setCarts(carts)
            }
        }

        GET_CARTS()
    }, [])

    return (
        <div className="h-screen">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center whitespace-nowrap text-3xl font-extrabold text-cyan dark:text-white">
                            Lakoe
                        </span>
                    </Link>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
                        {loggedUser ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                                        alt="user photo"
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="z-100">
                                    <DropdownMenuLabel>{loggedUser.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="cursor-pointer" onClick={onLogout}>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link to="/auth/login">
                                <h1 className="font-medium">Login</h1>
                            </Link>
                        )}
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-user"
                    >
                        <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {atLandingPage ? (
                                <a href="#" className="bg-transparent text-cyan p-0">
                                    Beranda
                                </a>
                            ) : (
                                <Link to="/">
                                    <button className="bg-transparent p-0">Beranda</button>
                                </Link>
                            )}
                            {atLandingPage ? (
                                <a href="#landing-category" className="bg-transparent p-0">
                                    Kategori
                                </a>
                            ) : (
                                <Link to="/">
                                    <button className="bg-transparent p-0">Kategori</button>
                                </Link>
                            )}
                            {atLandingPage ? (
                                <a href="#landing-product" className="bg-transparent p-0">
                                    Produk
                                </a>
                            ) : (
                                <Link to="/">
                                    <button className="bg-transparent p-0">Produk</button>
                                </Link>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="w-full flex justify-center mt-20">
                <Outlet />
            </div>

            {loggedUser && (
                <Sheet>
                    <SheetTrigger className="flex flex-start items-center gap-1 fixed bottom-0 right-4 w-60 py-2 px-3 rounded-se-lg rounded-ss-lg bg-cyan border border-cyan shadow-2xl hover:bg-opacity-90">
                        <AiFillShopping className="size-6 text-white" />
                        <p className="text-sm text-white font-bold mt-1 p-0">Keranjang Belanja</p>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="border-b pb-4 mb-2">
                                Keranjang Belanja
                            </SheetTitle>
                            <SheetDescription className="flex flex-col gap-6">
                                <CartList carts={carts} />
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            )}
            <Toaster />
        </div>
    )
}

export default BuyerLayout
