import { Input } from "@/components/ui/input"
import { BiSearchAlt } from "react-icons/bi";
import ScrollArea from "@/components/scroll/ScrollArea";
import FilterOrder from "@/components/filter/FilterOrder";
import CardOrder from "@/components/card/CardOrder";

export default function OrderPage() {
  return (
    <div className="w-full h-full bg-lightGray p-8">
      <div className="w-full bg-white rounded-lg flex flex-col gap-3 p-8">
        <h1 className="text-xl font-bold">Daftar Pesanan</h1>
        {/* Tabs */}
        <ScrollArea />

        {/* Input and Filter */}
        <div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <BiSearchAlt className="size-5" />
            </div>
            <div className="flex flex-row gap-3 w-full">
              <div className="w-2/4">
                <Input className="pl-10 border-lightGray rounded-md w-full" placeholder="Cari Pesanan" />
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
        <CardOrder status="Belum Dibayar" invoice="INV/20230809/MPL/00000239" text="Hubungi Pembeli" tshirt="CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S" stock="1" price="190.000" />
        <CardOrder status="Belum Dibayar" invoice="INV/20230809/MPL/00000239" text="Hubungi Pembeli" tshirt="CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S" stock="1" price="190.000" />
        <CardOrder status="Belum Dibayar" invoice="INV/20230809/MPL/00000239" text="Hubungi Pembeli" tshirt="CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S" stock="1" price="190.000" />

      </div>
    </div>
  )
}