import AddressBox from '@/components/AddressBox'
import LocationModal from '@/components/LocationModal'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

function StoreLocation() {
    const [renderModal, setRenderModal] = useState<boolean>(false)

    function onRenderModal() {
        setRenderModal((oldVal) => !oldVal)
    }

    function onModalClose() {
        setRenderModal(false)
    }

    return (
        <>
            <div className="flex justify-between items-center mt-2">
                <div className="flex flex-col">
                    <h2 className="text-black text-lg font-bold">Lokasi Toko</h2>
                    <p className="text-sm text-gray">
                        Alamat ini akan digunakan sebagai alamat pengirimanmu
                    </p>
                </div>
                <Button
                    className="bg-transparent text-black border border-lightgray hover:text-white"
                    onClick={onRenderModal}
                >
                    Tambah Lokasi
                </Button>
            </div>
            <AddressBox isMainAddress />
            <AddressBox />
            <AddressBox />
            {renderModal && <LocationModal isOpen={renderModal} onModalClose={onModalClose} />}
        </>
    )
}

export default StoreLocation
