import { Button } from '@/components/ui/button'
import { BiPlus } from 'react-icons/bi'
import Tabs from '@/components/product/Tabs'
import { Link } from 'react-router-dom'
import ProductList from '@/components/product/ProductList'
import { useEffect, useState } from 'react'
import dummyProduct from '@/dummy/productDummy'
import { useProductCheckedContext } from '@/context/checkedProductContext'
import API from '@/networks/api'
import { Product } from '@/types/ProductType'

function ProductPage() {
    const [realProducts, setRealProducts] = useState<Product[] | null>(null)
    const [products, setProducts] = useState(dummyProduct)
    const [activeTab, setactiveTabOption] = useState<string>('semua')
    const { setProductIdChecked } = useProductCheckedContext()

    function onTabChange(activeTab: string) {
        setProductIdChecked([])

        if (activeTab === 'Aktif') {
            setProducts(() => {
                return dummyProduct.filter((dummy) => dummy.status)
            })
        } else if (activeTab === 'Nonaktif') {
            setProducts(() => {
                return dummyProduct.filter((dummy) => !dummy.status)
            })
        } else {
            setProducts(dummyProduct)
        }

        setactiveTabOption(activeTab)
    }

    useEffect(() => {
        async function GET_PRODUCTS() {
            const products = await API.PRODUCT.GET_ALL()
            setRealProducts(products)
        }

        GET_PRODUCTS()
    }, [])

    // console.log(realProducts)

    if (products)
        <div className="w-full h-full bg-white rounded-lg p-8">
            {/* <div className="flex justify-between">
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

            {activeTab === 'Semua' ? (
                <ProductList key={1} tabOptions="semua" products={products} />
            ) : activeTab === 'Aktif' ? (
                <ProductList key={2} tabOptions="aktif" products={products} />
            ) : (
                <ProductList key={3} tabOptions="nonaktif" products={products} />
            )} */}
        </div>

    // real product edit
    if (realProducts)
        return (
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

                <ProductList
                    key={1}
                    realProducts={realProducts}
                    products={products}
                    tabOptions={activeTab}
                />
            </div>
        )
}

export default ProductPage
