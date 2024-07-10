import Layout from '@/layouts/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '@/pages/DashboardPage'
import ProductPage from '@/pages/ProductPage'
import NewProductPage from '@/pages/NewProductPage'
import OrderPage from '@/pages/OrderPage'
import DetailOrderPage from '@/pages/DetailOrderPage'
import SettingPage from '@/pages/SettingPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/product/new" element={<NewProductPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/order/:id" element={<DetailOrderPage />} />
                    <Route path="/setting" element={<SettingPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
