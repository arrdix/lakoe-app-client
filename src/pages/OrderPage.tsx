import { Input } from '@/components/ui/input'
import { BiSearchAlt } from 'react-icons/bi'
import FilterOrder from '@/components/order/FilterOrder'
import CardOrder from '@/components/order/CardOrder'
import { useEffect, useState } from 'react'
import ScrollArea from '@/components/order/ScrollArea'
import API from '@/networks/api'
import { Order } from '@/types/OrderType'

export default function OrderPage() {
    const [activeTab, setActiveTab] = useState<string>('Semua')
    const [orders, setOrders] = useState<Order[]>([])

    function onTabChange(tab: string) {
        setActiveTab(tab)
    }

    useEffect(() => {
        async function GET_ORDERS() {
            const orders: Order[] = await API.ORDER.GET_ALL()
            setOrders(orders)
        }

        GET_ORDERS()
    }, [])

    return (
        <div className="w-full bg-white rounded-lg flex flex-col gap-3 p-8">
            <h1 className="text-xl font-bold">Daftar Pesanan</h1>

            {/* Tabs */}
            <ScrollArea
                allTab="Semua"
                firstTab="Belum Dibayar"
                secondTab="Pesanan Baru"
                thirdTab="Siap Dikirim"
                fourthTab="Dalam Pengiriman"
                fifthTab="Pesanan Selesai"
                sixthTab="Dibatalkan"
                onTabChange={onTabChange}
            />

            <div>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <BiSearchAlt className="productSize-5" />
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="w-2/4">
                            <Input className="pl-10 rounded-md w-full" placeholder="Cari Pesanan" />
                        </div>
                        <div className="w-1/4">
                            <FilterOrder text="Kurir" />
                        </div>
                        <div className="w-1/4">
                            <FilterOrder text="Urutkan" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Item */}

            {/**
             *  TODO:
             *
             *  Bungkus <CardOrder /> di dalam komponen baru <CardOrderList />
             *  <CardOrderList /> menerima 1 props order.status
             *  <CardOrderList /> hanya merender <CardOrder /> sesuai statusnya
             *
             */}

            {orders.length ? (
                orders.map((order) => <CardOrder order={order} key={order.id} />)
            ) : (
                <p>No orders available.</p>
            )}
        </div>
    )
}
