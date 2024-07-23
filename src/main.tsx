import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { IdProductCheckedProvider } from './context/checkedProductContext.tsx'
import './styles/globals.css'
import 'leaflet-geosearch/assets/css/leaflet.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <IdProductCheckedProvider>
            <Router>
                <App />
            </Router>
        </IdProductCheckedProvider>
    </React.StrictMode>
)
