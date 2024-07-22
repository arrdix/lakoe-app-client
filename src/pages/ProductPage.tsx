import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import Tabs from "@/components/product/Tabs";
import { Link } from "react-router-dom";
import ProductList from "@/components/product/ProductList";
import { useEffect, useState } from "react";
import { useProductCheckedContext } from "@/context/checkedProductContext";
import API from "@/networks/api";
import { ProductBySku } from "@/types/ProductBySkuType";

function ProductPage() {
  const [realProducts, setRealProducts] = useState<ProductBySku[] | undefined>(
    undefined
  );
  const [realProductsFiltered, setRealProductsFiltered] = useState<
    ProductBySku[] | undefined
  >(realProducts);
  const [activeTab, setactiveTabOption] = useState<string>("semua");
  const { setProductSkuChecked } = useProductCheckedContext();

  function onTabChange(activeTab: string) {
    setProductSkuChecked([]);

    if (activeTab === "Aktif" && realProducts) {
      setRealProductsFiltered(() => {
        return realProducts.filter(
          (product) =>
            product.variant?.variantOption?.variantOptionValue?.isActive
        );
      });
    } else if (activeTab === "Nonaktif" && realProducts) {
      setRealProductsFiltered(() => {
        return realProducts.filter(
          (product) =>
            !product.variant?.variantOption?.variantOptionValue?.isActive
        );
      });
    } else {
      setRealProductsFiltered(realProducts);
    }

    setactiveTabOption(activeTab);
  }
  async function GET_PRODUCTS() {
    const products = await API.PRODUCT.GET_ALL_BY_SKU();
    setRealProducts(products);
    setRealProductsFiltered(products);
  }

  useEffect(() => {
    GET_PRODUCTS();
  }, []);

  console.log("data produk", realProducts);

  return (
    <div className="w-full bg-white rounded-lg p-8">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">Daftar Produk</h3>
        <Link to="/product/new">
          <Button className="p-3 rounded-3xl bg-cyan">
            <BiPlus className="mr-1" /> Tambahkan Produk
          </Button>
        </Link>
      </div>

      <Tabs
        firstTab="Semua"
        secondTab="Aktif"
        thirdTab="Nonaktif"
        onTabChange={onTabChange}
      />
    
      <ProductList
        key={activeTab}
        productsProps={realProductsFiltered}
        tabOptions={activeTab}
      />
    </div>
  );
}

export default ProductPage;