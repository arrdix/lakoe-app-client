import { Link, Outlet } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'
import { useLakoeStore } from '@/store/store'
import LOCAL_STORAGE from '@/networks/storage'

function BuyerLayout() {
    const loggedUser = useLakoeStore((state) => state.loggedUser)
    const setLoggedUser = useLakoeStore((state) => state.setLoggedUser)

    function onLogout() {
        LOCAL_STORAGE.REMOVE()
        setLoggedUser(null)
    }

    return (
        <div className="h-screen">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-100">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center whitespace-nowrap text-3xl font-extrabold text-cyan dark:text-white">
                            Lakoe
                        </span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
                        {loggedUser ? (
                            <div className="flex items-center gap-3">
                                <AiOutlineShopping className="size-5" />
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                    onClick={onLogout}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                                        alt="user photo"
                                    />
                                </button>
                            </div>
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
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white bg-cyan rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#landing-category"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Kategori
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#landing-product"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Produk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="w-full flex justify-center mt-20">
                <Outlet />
            </div>
        </div>
    )
}

export default BuyerLayout
