import { Button } from '@/components/ui/button'
import { BiPlus } from 'react-icons/bi'
import Tabs from '@/components/product/Tabs'
import { Link } from 'react-router-dom'
import ProductList from '@/components/product/ProductList'
import { useState } from 'react'
import dummyProduct from '@/dummy/productDummy'

const activeProduct = dummyProduct.filter((product) => {
    return product.status === true
})

const nonActiveProduct = dummyProduct.filter((product) => {
    return product.status === false
})

function ProductPage() {
    const [activeTab, setactiveTabOption] = useState<string>('semua')

    function onTabChange(activeTab: string) {
        setactiveTabOption(activeTab)
    }

    return (
        <div className="w-full h-full bg-lightergray p-8">
            <div className="w-full h-full bg-white rounded-lg p-8">
                <h3 className="font-bold text-xl">Daftar Produk</h3>
                <Link to="/product/new">
                    <Button className="p-3 rounded-3xl bg-cyan">
                        <BiPlus className="mr-1" /> Tambahkan Produk
                    </Button>
                </Link>
                <Tabs
                    firstTab="semua"
                    secondTab="aktif"
                    thirdTab="nonaktif"
                    onTabChange={onTabChange}
                />
                {activeTab === 'semua' ? (
                    <ProductList tabOptions="semua" productList={dummyProduct} />
                ) : activeTab === 'aktif' ? (
                    <ProductList tabOptions="aktif" productList={activeProduct} />
                ) : (
                    <ProductList tabOptions="nonaktif" productList={nonActiveProduct} />
                )}
            </div>
        </div>
    )
}

export default ProductPage
