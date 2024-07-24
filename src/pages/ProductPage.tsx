import { Button } from '@/components/ui/button'
import { BiPlus } from 'react-icons/bi'
import Tabs from '@/components/product/Tabs'
import { Link } from 'react-router-dom'
import ProductList from '@/components/product/ProductList'
import { useEffect, useState } from 'react'
import { useProductCheckedContext } from '@/context/checkedProductContext'
import { ProductBySku } from '@/types/ProductBySkuType'
import useProductsQuery from '@/hooks/useProductsQuery'

function ProductPage() {
    const { products } = useProductsQuery()
    const { setProductSkuChecked } = useProductCheckedContext()

    const [filteredProducts, setfilteredProducts] = useState<ProductBySku[]>(products)
    const [activeTab, setactiveTabOption] = useState<string>('semua')

    function onTabChange(activeTab: string) {
        setProductSkuChecked([])
        if (activeTab === 'Aktif' && products) {
            setfilteredProducts(() => {
                return products.filter(
                    (product) => product.variant?.variantOption?.variantOptionValue?.isActive
                )
            })
        } else if (activeTab === 'Nonaktif' && products) {
            setfilteredProducts(() => {
                return products.filter(
                    (product) => !product.variant?.variantOption?.variantOptionValue?.isActive
                )
            })
        } else {
            setfilteredProducts(products)
        }
        setactiveTabOption(activeTab)
    }

    useEffect(() => {
        setfilteredProducts(products)
        onTabChange(activeTab)
    }, [products])

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

            <ProductList key={activeTab} productsProps={filteredProducts} tabOptions={activeTab} />
        </div>
    )
}

export default ProductPage
