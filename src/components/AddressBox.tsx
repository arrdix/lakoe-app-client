import { FaLocationDot, FaRegTrashCan, FaPencil } from 'react-icons/fa6'

interface AddressBoxProps {
    isMainAddress?: boolean
}

function AddressBox({ isMainAddress }: AddressBoxProps) {
    return (
        <div className="flex border-2 border-lightgray rounded-md p-4">
            <div className="flex flex-col gap-2 w-1/5">
                <p className="text-sm font-light">Nama Lokasi</p>
                <p className="text-sm font-light">Alamat</p>
                <p className="text-sm font-light">Kota/Kecamatan</p>
                <p className="text-sm font-light">Kode Pos</p>
                <p className="text-sm font-light">Pinpoint</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex">
                    <p className="text-sm font-semibold">
                        React Store
                        {isMainAddress && (
                            <span className="bg-green text-xs text-white ml-2 py-1 px-2 rounded-sm">
                                Alamat Utama
                            </span>
                        )}
                    </p>
                    <div className="rounded-full border-2 border-gray p-1 ml-auto mr-1 text-xs">
                        <FaRegTrashCan />
                    </div>
                    <div className="rounded-full border-2 border-gray p-1 text-xs">
                        <FaPencil />
                    </div>
                </div>
                <p className="text-sm font-light">
                    Jl. Elang, No. 4, Sawah Lama, Ciputat, Tangerang Selatan
                </p>
                <p className="text-sm font-light">Kota Tangerang Selatan, Kec. Ciputat</p>
                <p className="text-sm font-light">15413</p>
                <p className="flex items-center gap-1 text-sm text-cyan font-light">
                    <FaLocationDot />
                    Sudah dipinpoint
                </p>
            </div>
        </div>
    )
}

export default AddressBox
