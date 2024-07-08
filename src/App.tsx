import Layout from '@/layouts/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import NewProductPage from '@/pages/NewProductPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/product/new" element={<NewProductPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
