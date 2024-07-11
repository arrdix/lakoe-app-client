import { Outlet } from 'react-router-dom'

function BuyerLayout() {
    return (
        <div className="h-screen">
            <div className="flex items-center py-4 px-8 w-full h-16 border border-gray-100 bg-white z-10 fixed top-0">
                <h1 className="text-3xl font-extrabold text-cyan">
                    Lakoe
                    <span className="text-black text-sm font-light ml-1">E-Commerce</span>
                </h1>
            </div>
            <div className="w-full flex justify-center mt-20">
                <Outlet />
            </div>
        </div>
    )
}

export default BuyerLayout
