import React from 'react'

export default function Price () {
  return (
    <div className="w-full bg-white rounded-lg p-4 items-center">
    <h1 className="text-black text-xl font-bold mb-4">Harga</h1>

    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-1">
        <label htmlFor="productName" className="text-sm">
          Deskripsi <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <div
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          >
            RP
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Masukan harga satuan barang"
              required
            />
          </div>
        </div>
      </form>

      <form className="flex flex-col gap-1">
        <label htmlFor="productName" className="text-sm">
          Minimal Pembelian
        </label>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Masukan minimal pembelian"
              required
            />
          </div>
          <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
            Produk
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
