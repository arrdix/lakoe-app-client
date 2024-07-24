import { Button } from '@/components/ui/button'
import { BiPlus } from 'react-icons/bi'
import Tabs from '@/components/product/Tabs'
import { Link } from 'react-router-dom'
import ProductList from '@/components/product/ProductList'
import { useEffect, useState } from 'react'
import { useProductCheckedContext } from '@/context/checkedProductContext'
import { ProductBySku } from '@/types/ProductBySkuType'
import useProductsQuery from '@/hooks/useProductsQuery'
import { useLakoeStore } from '@/store/store'
import { Store } from '@/types/StoreType'
import API from '@/networks/api'

function ProductPage() {
    const setLoggedUser = useLakoeStore((state) => state.setLoggedUser)
    const loggedUser = useLakoeStore((state) => state.loggedUser)
    const [store, setStore] = useState<Store>()

    const { products } = useProductsQuery()
    const { setProductSkuChecked } = useProductCheckedContext()

    const [filteredProducts, setfilteredProducts] = useState<ProductBySku[]>(products)
    const [activeTab, setactiveTabOption] = useState<string>('Semua')

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

    useEffect(() => {
        if (loggedUser && loggedUser.Stores) {
            setStore(loggedUser.Stores)
        }
    }, [loggedUser])

    useEffect(() => {
        async function GET_LOGGED_USER() {
            const loggedUser = await API.USER.GET_LOGGED_USER()

            if (loggedUser) {
                setLoggedUser(loggedUser)
            }
        }

        GET_LOGGED_USER()
    }, [])

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
            {store ? (
                <ProductList
                    key={activeTab}
                    productsProps={filteredProducts}
                    tabOptions={activeTab}
                />
            ) : (
                <div className="w-full mt-5 border border-lightgray p-5">
                    <p className="text-black">Hmm, kamu belum punya toko.</p>
                    <Link to="/store-setting">
                        <p className="text-cyan">Buat sekarang.</p>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ProductPage
