import ProductFilter from "@/components/product/ProductFilter";
import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import Tabs from "@/components/product/Tabs";
import { Input } from "@/components/ui/input";

function DashboardPage() {
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">Daftar Produk</h3>
        <Button className="p-3 rounded-3xl bg-cyan-600">
          {" "}
          <BiPlus className="mr-1" /> Tambahkan Produk
        </Button>
      </div>
      <Tabs />
      <ProductFilter />

      <div className="w-full bg-white rounded-lg flex justify-between">
        <h3 className="font-semibold">5 Produk</h3>
        <div className="flex items-center mb-4">
          <label
            htmlFor="default-checkbox"
            className="mr-2 text-sm font-thin text-gray-600"
          >
            Pilih Semua
          </label>
          <Input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
