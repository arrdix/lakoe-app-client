import ProductFilter from "@/components/product/ProductFilter";
import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import Tabs from "@/components/product/Tabs";
import { Link } from "react-router-dom";
import ProductList from "@/components/product/ProductList";
import DeleteProductsModal from "@/components/product/DeleteProductsModal";
import NonaktifProductsModal from "@/components/product/NonaktifProductsModal";
import { Checkbox } from "@/components/ui/checkbox";

function ProductPage() {
  return (
    <div className="w-full h-full bg-white p-8">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">Daftar Produk</h3>
        <Link to="/product/new">
          <Button className="p-3 rounded-3xl bg-cyan">
            <BiPlus className="mr-1" /> Tambahkan Produk
          </Button>
        </Link>
      </div>
      <Tabs />
      <ProductFilter />

      <div className="w-full bg-white rounded-lg flex justify-between pr-6">
        <h3 className="font-semibold">5 Produk</h3>
        <div className="flex items-center gap-4 mb-4">

          <div className="flex gap-2 items-center">
            <NonaktifProductsModal />
            <DeleteProductsModal />
          </div>

          <div className="flex gap-2 items-center">
            <label
              htmlFor="default-checkbox"
              className="text-sm font-thin text-gray-600"
            >
              Pilih Semua
            </label>
            <div className="pt-1">
              <Checkbox />
            </div>
          </div>
        </div>
      </div>

      <ProductList />
    </div>
  );
}

export default ProductPage;
