import Navigation from '@/components/Navigation'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="h-screen">
            <div className="flex items-center py-4 px-8 w-full h-16 border border-gray-100 bg-white z-10 fixed">
                <h1 className="text-3xl font-extrabold text-cyan">
                    Lakoe
                    <span className="text-black text-sm font-light ml-1">Seller Centre</span>
                </h1>
            </div>
            <div className="w-72 h-screen mt-14 fixed">
                <Navigation />
            </div>
            <div className="flex justify-center">
                <div className="w-3/5 mt-14">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
