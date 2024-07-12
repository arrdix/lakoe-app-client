import { Button } from "../ui/button";
import { BiImageAdd, BiPlus } from "react-icons/bi";
import { Switch } from "../ui/switch";
import { GiSettingsKnobs } from "react-icons/gi";

export default function VariantProduct() {
  return (
    <div className="w-full bg-lightgray rounded-lg  ">
      <div className="w-full bg-white rounded-lg p-4">
        <div className=" flex justify-between " >
          <h1 className="text-black text-xl font-bold ">Varian Produk</h1>
          <Button className="p-3 rounded-3xl bg-cyan">
            <BiPlus className="mr-1" /> Tambahkan Varian
          </Button>
        </div>
        <div className="text-stone-400 mb-4">Tambah varian agar pembeli memilih produck yang sesuai, yuk!</div>
        <div className="flex gap-2">
          <Button className="p-3 rounded-3xl bg-cyan">
            Warna
          </Button>
          <Button className="p-3 rounded-3xl bg-cyan ">
            Ukran
          </Button>
          <Button className="p-3 rounded-3xl bg-cyan">
            Ukuran Kemasan
          </Button>
          <Button className="p-3 rounded-3xl bg-cyan">
            <BiPlus className="mr-1" /> Buat Tipe Varian
          </Button>
        </div>
        <div className="mt-4">Warna</div>
        <div className="mt-4">dpropdown skip dulu</div>
        <div className="mt-4 flex gap-2">
          <Switch />
          Gunakan foto varian
        </div>
        <div className="flex flex-row gap-2 h-24 mt-4">
          <div className="w-28 h-28 flex flex-col border-dashed border border-gray rounded items-center justify-center">
            <BiImageAdd className="size-10 fill-gray" />
            <span className="text-gray">Foto Sage</span>
          </div>
          <div className="w-28 h-28 flex flex-col border-dashed border border-gray rounded items-center justify-center">
            <BiImageAdd className="size-10 fill-gray" />
            <span className="text-gray">Foto Hitam</span>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <div className="mt-10  flex flex-col">
            <p className="  text-xl font-bold ">Daftar Varian</p>
            <p className="text-sm text-stone-400">Kamu dapat mengatur harga, stok dan SKUsekaligus</p>
          </div>
          <div>
            <Button className="p-3 rounded-3xl bg-cyan">
              <GiSettingsKnobs className="mr-1" /> Atur Sekaligus
            </Button>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <p className=" font-bold">Sage</p>
          <Switch />
          <p>Aktif</p>
        </div>
        <div className="flex justify-between items-center mt-4">
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
              <div className="relative w-80 ">
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
          <form className="flex flex-col gap-1 w-80">
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
        </div>
        <div className="flex justify-between items-center mt-4">
          <form className="flex flex-col gap-1 w-3/6">
            <label htmlFor="productName" className="text-sm">
              SKU (Stok Keeping Unit)
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Masukan SKU"
                  required
                />
              </div>
            </div>
          </form>
          <form className="flex flex-col gap-1 w-80">
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
        </div>
        <div className="flex gap-2 mt-4">
          <p className=" font-bold">Hitam</p>
          <Switch />
          <p>Aktif</p>
        </div>
        <div className="flex justify-between items-center mt-4">
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
              <div className="relative w-80 ">
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
          <form className="flex flex-col gap-1 w-80">
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
        </div>
        <div className="flex justify-between items-center mt-4">
          <form className="flex flex-col gap-1 w-3/6">
            <label htmlFor="productName" className="text-sm">
              SKU (Stok Keeping Unit)
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Masukan SKU"
                  required
                />
              </div>
            </div>
          </form>
          <form className="flex flex-col gap-1 w-80">
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
        </div>
      </div>
    </div>
  );
}
