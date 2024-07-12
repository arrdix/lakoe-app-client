import Layout from '@/layouts/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '@/pages/DashboardPage'
import ProductPage from '@/pages/ProductPage'
import NewProductPage from '@/pages/NewProductPage'
import OrderPage from '@/pages/OrderPage'
import SettingPage from '@/pages/SettingPage'
import roleChecker from '@/utils/roleChecker'
import BuyerLayout from '@/layouts/BuyerLayout'
import BuyerPage from '@/pages/BuyerPage'

function App() {
    const role = 'SELLER'

    if (roleChecker.isBuyer(role)) {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<BuyerLayout />}>
                        <Route index element={<BuyerPage />} />
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
                        <Route path="/setting" element={<SettingPage />} />
                    </Route>
                </Routes>
            </div>
        )
    }
}

export default App
