import { LuPackageSearch } from 'react-icons/lu'

export default function NoResultProduct({ tabOptions }: { tabOptions: string }) {
    return (
        <div>
            <div className="flex gap-3 rounded-md shadow p-10 justify-center items-center">
                <LuPackageSearch size={70} className="text-gray mr-2" />
                <div className="flex flex-col gap-1 w-3/4">
                    <div className="w-full flex flex-row">
                        <h1 className="text-sm font-semibold">
                            {tabOptions == 'Aktif' && 'Oops, saat ini belum ada produk yang aktif'}
                            {tabOptions == 'Nonaktif' && 'Semua produk telah aktif'}
                            {tabOptions == 'Semua' && 'Belum ada produk yang tersedia'}
                        </h1>
                    </div>

                    <p className="text-sm">
                        {tabOptions == 'Aktif' && 'Aktifkan produk kamu atau buat produk baru'}
                        {tabOptions == 'Nonaktif' && 'Kamu bisa buat produk baru dan menyimpannya'}
                        {tabOptions == 'Semua' && 'Kamu bisa buat produk baru dan menyimpannya'}
                    </p>
                </div>
            </div>
        </div>
    )
}
