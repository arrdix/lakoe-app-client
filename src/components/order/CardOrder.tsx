import { Button } from '@/components/ui/button'
import API from '@/networks/api'
import { Order } from '@/types/OrderType'
import { Product } from '@/types/ProductType'
import { VariantOption } from '@/types/VariantOptionType'
import { VariantOptionValue } from '@/types/VariantOptionValueType'
import { Variant } from '@/types/VariantType'
import statusChecker from '@/utils/statusChecker'
import { useEffect, useState } from 'react'

interface CardOrderProps {
    order: Order
}

export default function CardOrder({ order }: CardOrderProps) {
    const [product, setProduct] = useState<Product | null>(null)
    const [variant, setVariant] = useState<Variant | null>(null)
    const [variantOption, setVariantOption] = useState<VariantOption | null>(null)
    const [variantOptionValue, setVariantOptionValue] = useState<VariantOptionValue | null>(null)

    const { buttonText, labelColor } = statusChecker(order.status)
    const productSKU =
        order &&
        order.carts &&
        order.carts.cartItems &&
        order.carts.cartItems[0] &&
        order.carts.cartItems[0].variantOptionValues &&
        order.carts.cartItems[0].variantOptionValues.sku

    useEffect(() => {
        async function GET_PRODUCT() {
            if (productSKU) {
                const product: Product = await API.PRODUCT.GET_ONE(productSKU)

                setProduct(product)
                setVariant((product.variant && product.variant) || null)
                setVariantOption((product.variant && product.variant.variantOption) || null)
                setVariantOptionValue(
                    (product.variant &&
                        product.variant &&
                        product.variant.variantOption &&
                        product.variant.variantOption.variantOptionValue) ||
                    null
                )
            }
        }

        GET_PRODUCT()
    }, [])

    console.log('Product SKU:', productSKU)
    console.log('Product State:', product)
    console.log('Variant State:', variant)
    console.log('Variant Option State:', variantOption)
    console.log('Variant Option Value State:', variantOptionValue)

    console.log('BUTTON TEXT:', buttonText)
    console.log('LABEL COLOR:', labelColor)

    console.log('PRODUCT SKU:', productSKU)

    console.log('PRODUCT:', product)
    console.log('VARIANT:', variant)
    console.log('VARIANT OPTION', variantOption)
    console.log('VARIANT OPTION VALUE', variantOptionValue)

    /**
     *  NOTE:
     *
     *  buttonText sebelumnya adalah text
     *  labelColor sebelumnya adalah color
     *
     */

    if (product) {
        return (
            <div>
                <div className="border border-lightGray rounded flex flex-col gap-3">
                    <div className="flex justify-between border-b p-3">
                        <div className="flex flex-col gap-1">
                            <p className={`${labelColor} w-fit font-semibold rounded p-1 text-sm`}>
                                {order.status}
                            </p>
                            <p className="text-gray text-sm">{order.receiverNumber}</p>
                        </div>
                        <div>
                            <Button variant={'outline'}>{buttonText}</Button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row px-3 pb-3">
                        <img className="w-14 mr-2" src="../../public/tshirt.png" alt="" />
                        <div className="w-full flex flex-row justify-between items-center">
                            <div>
                                <h1 className="text-sm font-semibold">
                                    {product.name} -
                                    {variantOption?.name} |
                                    {product.description} -
                                    {variant?.variantOption?.name}
                                </h1>
                                <p className="text-gray text-sm">
                                    {variantOptionValue?.stock}
                                    Barang
                                </p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-gray text-sm font-normal">Total Belanja</p>
                                <p className="font-medium text-sm">Rp. {order.price}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
