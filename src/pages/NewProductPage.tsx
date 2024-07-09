import { Textarea } from "@/components/ui/textarea";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";

function NewProductPage() {
  return (
    <div className="w-full bg-lightGray p-8">
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
              className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
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
              className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="productName" className="text-sm">
              Kategori <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Baju Haram"
              className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
            />
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
      <div className="w-full bg-white rounded-lg p-8 flex items-center">
        <div className="flex flex-col">
          <h1 className="text-black text-xl font-bold mb-4">Varian Produk</h1>
          <p className="text-gray">
            Tambah varian agar pembelian dapat memilih produk yang sesuai, yuk!
          </p>
        </div>
        <div className="items-center justify-center">
          <Button variant="outline">
            <IoIosAddCircleOutline className="mr-2 size-5" />
            <p>Tambah Varian</p>
          </Button>
        </div>
      </div>

      {/* Harga */}
      <div className="w-full bg-white rounded-lg p-8 items-center">
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

      {/* Pengelolaan produk */}
      <div className="w-full bg-white rounded-lg p-8 items-center">
        <h1 className="text-black text-xl font-bold mb-4">
          Pengelolaan Produk
        </h1>

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

      {/* Berat dan Pengiriman */}
      <div className="w-full bg-white rounded-lg p-8 items-center">
        <h1 className="text-black text-xl font-bold mb-4">
          Berat & Pengiriman
        </h1>

        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-1">
            <label htmlFor="productName" className="text-sm">
              Berat Produk
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Masukan berat produk"
                  required
                />
              </div>
              <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                Gram
              </div>
            </div>
          </form>

          <div>
            <label htmlFor="productName" className="text-sm">
              Ukuran Produk
            </label>

            <div className="flex gap-2">
              <form className="flex flex-col gap-1 w-full">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Panjang"
                      required
                    />
                  </div>
                  <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                    cm
                  </div>
                </div>
              </form>
              <form className="flex flex-col gap-1 w-full">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Lebar"
                      required
                    />
                  </div>
                  <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                    cm
                  </div>
                </div>
              </form>
              <form className="flex flex-col gap-1 w-full">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Tinggi"
                      required
                    />
                  </div>
                  <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                    cm
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Preview halaman checkout */}
      <div className="w-full bg-white rounded-lg p-8 flex items-center flex justify-between">
        <Button variant="outline">
          Preview Halaman Checkout
        </Button>
        <div className="flex gap-2">
        <Button variant="outline" className="px-5">
          Cancel
        </Button>
        <Button variant="outline" className="bg-cyan text-white px-5 py-0">
          Save
        </Button>
        </div>
      </div>
    </div>
  );
}

export default NewProductPage;
