import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import Tabs from "@/components/product/Tabs";
import { Link } from "react-router-dom";
import ProductList from "@/components/product/ProductList";
import { useState } from "react";
import dummyProduct from "@/dummy/productDummy";
import { useProductCheckedContext } from "@/context/checkedProductContext";

// const activeProduct = dummyProduct.filter((product) => {
//   return product.status === true;
// });

// const nonActiveProduct = dummyProduct.filter((product) => {
//   return product.status === false;
// });

function ProductPage() {
    const [activeTab, setactiveTabOption] = useState<string>("semua");
    const { id, setProductIdChecked } = useProductCheckedContext();
    const [products, setProducts] = useState(dummyProduct);

    function onTabChange(activeTab: string) {
        setProductIdChecked([]);
        console.log("on tab", id);
        console.log("tab", dummyProduct)

        if (activeTab === "Aktif") {
            setProducts(() => {
                return dummyProduct.filter((dummy) => dummy.status);
            });
        } else if (activeTab === "Nonaktif") {
            setProducts(() => {
                return dummyProduct.filter((dummy) => !dummy.status);
            });
        } else {
            setProducts(dummyProduct);
        }

        setactiveTabOption(activeTab);
    }

    return (
        <div className="w-full h-full bg-lightergray p-8">
            <div className="w-full h-full bg-white rounded-lg p-8">
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

                {activeTab === "Semua" ? (
                    <ProductList key={1} tabOptions="semua" productList={products} />
                ) : activeTab === "Aktif" ? (
                    <ProductList key={2} tabOptions="aktif" productList={products} />
                ) : (
                    <ProductList
                        key={3}
                        tabOptions="nonaktif"
                        productList={products}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductPage;
