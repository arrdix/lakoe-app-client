import Tabs from '@/components/product/Tabs'
import { Button } from '@/components/ui/button'
import { BiImageAdd } from 'react-icons/bi'

function SettingPage() {
    return (
        <div className="w-full h-full bg-lightGray p-8">
            {/* Store Setting */}
            <div className="flex flex-col gap-4 w-full bg-white rounded-lg p-8">
                <h1 className="text-black text-xl font-bold mb-4">React Store</h1>
                <Tabs firstTab="Informasi" secondTab="Lokasi" thirdTab="Template Pesan" />
                <h2 className="text-black text-md font-bold">Informasi Toko</h2>
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="productName" className="text-sm">
                                Slogan <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="storeSlogan"
                                placeholder="Prediksi Jaya Jaya Jaya"
                                className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="productName" className="text-sm">
                                Nama Toko <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="storeName"
                                placeholder="Toko Haram"
                                className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="storeDescription" className="text-sm">
                            Deskripsi Toko <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="storeDescription"
                            className="w-full h-full border-2 border-gray-200 resize-none rounded-md pl-2 pt-2 text-sm text-gray"
                        >
                            Toko ini menjual barang haram.
                        </textarea>
                    </div>
                </div>
                <div className="flex border-b-2 border-lightGray pb-4">
                    <Button className="ml-auto rounded-lg">Simpan</Button>
                </div>
                <h2 className="text-black text-md font-bold">Logo Toko</h2>
                <div className="border-2 border-gray border-dotted w-56 h-56 rounded-md relative">
                    <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray">
                        <BiImageAdd size={'4rem'} />
                        <p className="text-sm">Unggah Foto</p>
                    </div>
                </div>
                <p className="text-gray text-sm">
                    Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10 Megabytes. <br />
                    Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
                </p>
            </div>
        </div>
    )
}

export default SettingPage
