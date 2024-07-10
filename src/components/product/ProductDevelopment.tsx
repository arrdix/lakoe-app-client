import React from "react";

export default function ProductDevelopment() {
  return (
    <div className="w-full bg-white rounded-lg p-4 items-center">
      <h1 className="text-black text-xl font-bold mb-4">Pengelolaan Produk</h1>

      <div className="flex gap-2">
        <form className="flex flex-col gap-1 w-full">
          <label htmlFor="productName" className="text-sm">
            Stok Produk <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Masukan harga satuan barang"
                required
              />
            </div>
          </div>
        </form>

        <form className="flex flex-col gap-1 w-full">
          <label htmlFor="productName" className="text-sm">
            SKU (Stok Keeping Unit)
          </label>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Masukan minimal pembelian"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
