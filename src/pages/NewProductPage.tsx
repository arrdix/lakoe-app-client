import { Textarea } from '@/components/ui/textarea'
import { BiImageAdd } from 'react-icons/bi'
function NewProductPage() {
    return (
        <div className="w-full h-full bg-lightGray p-8">
            {/* Informasi Produk */}
            <div className="w-full bg-white rounded-lg p-8">
                <h1 className="text-black text-xl font-bold mb-4">Informasi Produk</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            Nama Produk <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="Baju Spiderman - Hitam"
                            className="border border-gray-200 rounded-md h-10 pl-2 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            URL Halaman Checkout <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="baju-spiderman-hitam"
                            className="border border-gray-200 rounded-md h-10 pl-2 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            Kategori <span className="text-red-500">*</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Detail Produk */}
            <div className="w-full bg-white rounded-lg p-8">
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

            {/* Varian Produk */}
            <div className="w-full bg-white rounded-lg p-8">
                <h1 className="text-black text-xl font-bold mb-4">Detail Produk</h1>
            </div>
        </div>
    )
}

export default NewProductPage
