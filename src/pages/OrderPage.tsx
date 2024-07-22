import { Input } from '@/components/ui/input';
import { BiSearchAlt } from 'react-icons/bi';
import FilterOrder from '@/components/order/FilterOrder';
import { useEffect, useState } from 'react';
import ScrollArea from '@/components/order/ScrollArea';
import API from '@/networks/api';
import { Order } from '@/types/OrderType';
import CardOrderList from '@/components/order/CardOrderList';

const courierOptions = [
    { value: "GoSend", text: "GoSend" },
    { value: "GrabExpress", text: "GrabExpress" },
    { value: "AnterAja", text: "AnterAja" },
    { value: "JNE", text: "JNE" },
    { value: "J&T", text: "J&T" },
    { value: "LionParcel", text: "Lion Parcel" },
    { value: "NinjaExpress", text: "Ninja Express" },
    { value: "PosIndonesia", text: "Pos Indonesia" }
];

const sortOptions = [
    { value: "PalingBaru", text: "Paling Baru" },
    { value: "PalingLama", text: "Paling Lama" },
    { value: "ResponsTercepat", text: "Respons Tercepat" },
    { value: "ResponsTerlama", text: "Respons Terlama" }
];

interface StatusTab {
    BELUM_DIBAYAR: number;
    PESANAN_BARU: number;
    SIAP_DIKIRIM: number;
    DALAM_PENGIRIMAN: number;
    PESANAN_SELESAI: number;
    DIBATALKAN: number;
}

export default function OrderPage() {
    const [activeTab, setActiveTab] = useState<string>('Semua');
    const [orders, setOrders] = useState<Order[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCourier, setSelectedCourier] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('');

    function onTabChange(tab: string) {
        setActiveTab(tab);
    }

    useEffect(() => {
        async function GET_ORDERS() {
            const orders: Order[] = await API.ORDER.GET_ALL();
            setOrders(orders);
        }

        GET_ORDERS();
    }, []);

    const handleCourierChange = (value: string) => {
        setSelectedCourier(value);
        console.log(`Selected courier: ${value}`);
    };

    const handleSortChange = (value: string) => {
        setSortOption(value);
        console.log(`Selected sort option: ${value}`);
    };

    const sortOrders = (orders: Order[], sortOption: string) => {
        switch (sortOption) {
            case "PalingBaru":
                return [...orders].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            case "PalingLama":
                return [...orders].sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
            default:
                return orders;
        }
    };

    const sortedOrders = sortOrders(orders, sortOption);

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

            {/* Search and Input */}
            <div>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <BiSearchAlt className="size-5" />
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="w-4/5">
                            <Input
                                className="pl-10 rounded-md w-full"
                                placeholder="Cari Pesanan"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* <div className="w-1/4">
                            <FilterOrder text="Kurir" items={courierOptions} onChange={handleCourierChange} />
                        </div> */}
                        <div className="w-1/5">
                            <FilterOrder text="Urutkan" items={sortOptions} onChange={handleSortChange} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Item */}
            <CardOrderList orders={sortedOrders} status={activeTab} searchTerm={searchTerm} />
        </div>
    );
}
