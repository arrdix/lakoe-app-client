import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'leaflet-geosearch/assets/css/leaflet.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import { IdProductCheckedProvider } from './context/checkedProductContext.tsx'
import './styles/globals.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <IdProductCheckedProvider>
                <Router>
                    <App />
                </Router>
            </IdProductCheckedProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
