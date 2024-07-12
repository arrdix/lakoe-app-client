import { Input } from "@/components/ui/input";
import { BiSearchAlt } from "react-icons/bi";
import FilterOrder from "@/components/order/FilterOrder";
import CardOrder from "@/components/order/CardOrder";
import { useEffect, useState } from "react";
import ScrollArea from "@/components/order/ScrollArea";
import API from "@/networks/api";
import { Order } from "@/types/OrderType"

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [orders, setOrders] = useState<Order[]>([]);

  function onTabChange(tab: string) {
    setActiveTab(tab);
  }

  useEffect(() => {
    async function fetchOrder() {
      try {
        const orders: Order[] = await API.ORDER.GET_ALL();
        setOrders(orders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    }

    fetchOrder();
  }, []);

  return (
    <div className="w-full h-full bg-lightergray p-8">
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
        {
          orders.length ? (
            orders.map((order) => {
              let color;
              let text;

              switch (order.status) {
                case "Belum Dibayar":
                  color = "bg-yellow-400";
                  text = 'Hubungi Pembeli'
                  break;
                case "Pesanan Baru":
                  color = "bg-green-600 text-white";
                  text = "Proses Pesanan"
                  break;
                case "Siap Dikirim":
                  color = "bg-blue-600 text-white";
                  text = "Kabari Pembeli"
                  break;
                case "Dalam Pengiriman":
                  color = "bg-orange-600 text-white";
                  text = "Lihat Rincian Pengiriman"
                  break;
                case "Pesanan Selesai":
                  color = "bg-lightGray";
                  text = "Hubungi Pembeli"
                  break;
                case "Dibatalkan":
                  color = "bg-red-600 text-white";
                  text = "Hubungi Pembeli"
                  break;
                default:
                  color = "bg-gray-200";
                  text = "Hubungi Pembeli"
              }

              return (
                <CardOrder
                  order={order}
                  color={color}
                  text={text}
                />
              );
            })
          ) : (
            <p>No orders available.</p>
          )
        }
      </div>
    </div>
  );
}
