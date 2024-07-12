import Card from './CardProduct'
import ProductFilter from './ProductFilter'
import NonaktifProductsModal from './NonaktifProductsModal'
import DeleteProductsModal from './DeleteProductsModal'
import { Checkbox } from '@/components/ui/checkbox'
import NoResultProduct from './NoResultProduct'
import { ProductType } from '@/dummy/productDummy'
import { useProductCheckedContext } from '@/context/checkedProductContext'
import { useState } from 'react'

export default function ProductList({
    productList,
    tabOptions,
}: {
    productList: ProductType[]
    tabOptions: string
}) {
    const { id } = useProductCheckedContext()
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
    const [isCheckedChange, setIsCheckedChange] = useState(false)

    const onCheckedChange = () => {
        setIsCheckedChange(!isCheckedChange)
    }

    console.log('ini id', id)
    console.log('all checked', isAllChecked)

    return (
        <div>
            {/* jika produk tersedia */}
            {productList.length === 0 ? (
                <div>
                    <NoResultProduct tabOptions={tabOptions} />
                </div>
            ) : (
                <div>
                    <ProductFilter />
                    <div className="w-full bg-white rounded-lg flex justify-between">
                        <h3 className="font-semibold">{productList.length} produk</h3>
                        <div className="flex items-center gap-4 mb-4">
                            {id.length > 0 && (
                                <div className="flex gap-2 items-center">
                                    <NonaktifProductsModal />
                                    <DeleteProductsModal />
                                </div>
                            )}
                            <div className="flex gap-4 items-center">
                                <label
                                    htmlFor="default-checkbox"
                                    className="text-sm font-thin text-gray-600"
                                >
                                    {!isAllChecked ? 'Pilih Semua' : 'Batalkan Semua'}
                                </label>
                                <div className="pt-1">
                                    <Checkbox
                                        checked={isAllChecked}
                                        onCheckedChange={() => {
                                            setIsAllChecked(!isAllChecked)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        {productList.map((product) => (
                            <Card
                                key={product.id}
                                product={product}
                                isCheckedDefault={isAllChecked}
                                onCheckedChanges={onCheckedChange}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
