import Layout from '@/layouts/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '@/pages/DashboardPage'
import ProductPage from '@/pages/ProductPage'
import NewProductPage from '@/pages/NewProductPage'
import OrderPage from '@/pages/OrderPage'
import DetailOrderPage from './pages/DetailOrderPage'
import SettingPage from '@/pages/SettingPage'
import roleChecker from '@/utils/roleChecker'
import BuyerLayout from '@/layouts/BuyerLayout'
import BuyerPage from '@/pages/BuyerPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import { useLakoeStore } from '@/store/store'
import { useEffect, useState } from 'react'
import API from '@/networks/api'
import LandingPage from './pages/LandingPage'
import { Cart } from '@/types/CartType'
import ShippingPage from './pages/ShippingPage'

function App() {
    const [isPreloaded, setIsPreloaded] = useState<boolean>(true)

    const loggedUser = useLakoeStore((state) => state.loggedUser)
    const setLoggedUser = useLakoeStore((state) => state.setLoggedUser)
    const setcarts = useLakoeStore((state) => state.setCarts)

    useEffect(() => {
        async function isUserLogged() {
            try {
                const loggedUser = await API.USER.GET_LOGGED_USER()

                if (loggedUser) {
                    setLoggedUser(loggedUser)
                }
            } catch (error) {
                setLoggedUser(null)
            } finally {
                setTimeout(() => {
                    setIsPreloaded(false)
                }, 1000)
            }
        }

        async function getActiveCart() {
            const carts: Cart[] = await API.CART.FIND_ALL_UNCOMPLETE()

            setcarts(carts)
        }

        isUserLogged()
        getActiveCart()
    }, [])

    if (isPreloaded) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <div className="flex items-start">
                    <h1 className="text-3xl text-cyan font-black aniamte-spin">Lakoe.</h1>
                    <div className="inline-block h-2 w-2 animate-spin-fast rounded-full border-4 border-solid border-current border-e-transparent border-cyan mt-1 ml-1"></div>
                </div>
            </div>
        )
    }

    if (loggedUser) {
        if (roleChecker.isSeller(loggedUser.role)) {
            return (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/product/new" element={<NewProductPage />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/order/detail/:id" element={<DetailOrderPage />} />
                        <Route path="/store-setting" element={<SettingPage />} />
                        <Route path="/store-shipping" element={<ShippingPage />} />
                        <Route path="/reset" index element={<ResetPasswordPage />} />
                    </Route>
                </Routes>
            )
        }

        if (roleChecker.isBuyer(loggedUser.role)) {
            return (
                <Routes>
                    <Route path="/" element={<BuyerLayout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/product/:id" element={<BuyerPage />} />
                        <Route path="/checkout" index element={<CheckoutPage />} />
                        <Route path="/reset" index element={<ResetPasswordPage />} />
                    </Route>
                </Routes>
            )
        }
    }

    return (
        <Routes>
            <Route path="/" element={<BuyerLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/product/:id" element={<BuyerPage />} />
                <Route path="/auth/login" index element={<LoginPage />} />
                <Route path="/auth/register" index element={<RegisterPage />} />
                <Route path="/forgot" index element={<ForgotPasswordPage />} />
            </Route>
        </Routes>
    )

    // return (
    //     <Routes>
    //         <Route path="/" index element={<LoginPage />} />
    //         <Route path="/auth/register" index element={<RegisterPage />} />
    //         <Route path="/forgot" index element={<ForgotPasswordPage />} />
    //         <Route path="/reset" index element={<ResetPasswordPage />} />
    //         <Route path="/checkout" index element={<CheckoutPage />} />
    //         <Route path="/buy" element={<BuyerPage />} />
    //     </Routes>
    // )

    // const role = 'SELLER'
    // const token = localStorage.token
    // console.log(token);

    // if (roleChecker.isBuyer(role)) {
    //     return (
    //         <div className="App">
    //             <Routes>
    //                 <Route path="/" element={<BuyerLayout />}>
    //                     <Route path="/product/new" element={<NewProductPage />} />
    //                     <Route path="/auth/login" index element={<LoginPage />} />
    //                     <Route path="/auth/register" index element={<RegisterPage />} />
    //                     <Route path="forgot" index element={<ForgotPasswordPage />} />
    //                     <Route path="reset" index element={<ResetPasswordPage />} />
    //                 </Route>
    //             </Routes>
    //         </div>
    //     )
    // }

    // if (roleChecker.isSeller(role)) {
    //     return (
    //         <div className="App">
    //             <Routes>
    //                 <Route path="/" element={<Layout />}>
    //                     <Route index element={<DashboardPage />} />
    //                     <Route path="/product" element={<ProductPage />} />
    //                     <Route path="/product/new" element={<NewProductPage />} />
    //                     <Route path="/order" element={<OrderPage />} />
    //                     <Route path="/order/detail/:id" element={<DetailOrderPage />} />
    //                     <Route path="/setting" element={<SettingPage />} />
    //                 </Route>
    //             </Routes>
    //         </div>
    //     )
    // }
}

export default App
