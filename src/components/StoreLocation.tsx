import AddressBox from '@/components/AddressBox'
import { Button } from '@/components/ui/button'

function StoreLocation() {
    return (
        <>
            <div className="flex justify-between items-center mt-2">
                <div className="flex flex-col">
                    <h2 className="text-black text-md font-bold">Lokasi Toko</h2>
                    <p className="text-sm text-gray">
                        Alamat ini akan digunakan sebagai alamat pengirimanmu
                    </p>
                </div>
                <Button className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white">
                    Tambah Lokasi
                </Button>
            </div>
            <AddressBox isMainAddress />
            <AddressBox />
            <AddressBox />
        </>
    )
}

export default StoreLocation
