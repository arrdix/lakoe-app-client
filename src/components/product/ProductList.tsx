import Card from '../card/CardProduct'
import ProductFilter from './ProductFilter'
import NonaktifProductsModal from './NonaktifProductsModal'
import DeleteProductsModal from './DeleteProductsModal'
import { Checkbox } from '@/components/ui/checkbox'
import NoResultProduct from './NoResultProduct'
import { ProductType } from '@/dummy/productDummy'

export default function ProductList({
    productList,
    tabOptions,
}: {
    productList: ProductType[]
    tabOptions: string
}) {
    return (
        <div>
            {/* jika produk tersedia */}
            {productList.length == 0 ? (
                <div>
                    <NoResultProduct tabOptions={tabOptions} />
                </div>
            ) : (
                <div>
                    <ProductFilter />
                    <div className="w-full bg-white rounded-lg flex justify-between pr-6">
                        <h3 className="font-semibold">{productList.length} produk</h3>
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
                    <div>
                        {productList.map((product) => {
                            return <Card product={product} key={product.SKU}></Card>
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
