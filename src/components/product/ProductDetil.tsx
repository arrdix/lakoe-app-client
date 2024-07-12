import { Textarea } from '../ui/textarea'
import { BiImageAdd } from 'react-icons/bi'

export default function DetilPrduct() {
    return (
        <div className="w-full bg-white rounded-lg p-4">
            <h1 className="text-black text-xl font-bold mb-4">Detail Produk</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="productName" className="text-sm">
                        Deskripsi <span className="text-red-500">*</span>
                    </label>
                    <Textarea placeholder="Masukan deskripsi lengkap produk kamu" />
                    <div className="flex justify-end text-gray">
                        <p className="text-xs">0/3000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="productName" className="text-sm">
                        URL Halaman Checkout <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-row gap-2 h-24">
                        <div className="w-full h-full flex flex-col border-dashed border border-gray rounded items-center justify-center">
                            <BiImageAdd className="size-10 fill-gray" />
                            <span className="text-gray">Foto Utama</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
