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

function App() {
    const role = 'SELLER'
    const token = localStorage.token
    // console.log(token);

    // if (token) {
    //     return <Routes>
    //         <Route path="/" element={<Layout />}>
    //             <Route index element={<DashboardPage />} />
    //             <Route path="/product" element={<ProductPage />} />
    //             <Route path="/product/new" element={<NewProductPage />} />
    //             <Route path="/order" element={<OrderPage />} />
    //             <Route path="/order/detail" element={<DetailOrderPage />} />
    //             <Route path="/setting" element={<SettingPage />} />
    //         </Route>
    //     </Routes>
    // } else {
    //     return <Routes>
    //         <Route path='/' index element={<LoginPage />} />
    //         <Route path='/auth/register' index element={<RegisterPage />} />
    //         <Route path='forgot' index element={<ForgotPasswordPage />} />
    //         <Route path='reset' index element={<ResetPasswordPage />} />
    //     </Routes>
    // }

    if (roleChecker.isBuyer(role)) {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<BuyerLayout />}>
                        <Route index element={<BuyerPage />} />
                        <Route path="/product/new" element={<NewProductPage />} />
                        <Route path='checkout' index element={<CheckoutPage />} />
                        <Route path='/auth/login' index element={<LoginPage />} />
                        <Route path='/auth/register' index element={<RegisterPage />} />
                        <Route path='/auth/forgot' index element={<ForgotPasswordPage />} />
                        <Route path='/auth/reset' index element={<ResetPasswordPage />} />
                    </Route>
                </Routes>
            </div>
        )
    }

    if (roleChecker.isSeller(role)) {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/product/new" element={<NewProductPage />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/order/detail/:id" element={<DetailOrderPage />} />
                        <Route path="/setting" element={<SettingPage />} />
                    </Route>
                </Routes>
            </div>
        )
    }
}

export default App
