import Layout from '@/layouts/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
