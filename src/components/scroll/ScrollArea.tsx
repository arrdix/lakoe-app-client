export default function ScrollArea() {
    return (
        <div className="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <div className="w-full overflow-x-auto scrollbar-hide">
                <ul className="flex flex-nowrap whitespace-nowrap gap-10">
                    <li className="flex justify-end">
                        <a href="#" className="inline-block py-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Semua</a>
                    </li>
                    <li className="flex justify-end">
                        <a href="#" className="items-center gap-2 inline-block py-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                            <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2">1</span>
                            Belum Bayar
                        </a>
                    </li>
                    <li className="flex justify-end">
                        <a href="#" className="items-center gap-2 inline-block py-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                            <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2">1</span>
                            Pesanan Baru
                        </a>
                    </li>
                    <li className="flex justify-end">
                        <a href="#" className="items-center gap-2 inline-block py-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                            <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2">1</span>
                            Siap Dikirim
                        </a>
                    </li>
                    <li className="flex justify-end">
                        <a href="#" className="items-center gap-2 inline-block py-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                            <span className="bg-cyan text-white py-1 px-2.5 rounded-full mr-2">1</span>
                            Dalam Pengiriman
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}
