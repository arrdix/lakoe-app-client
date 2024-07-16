import { Button } from '@/components/ui/button'
import API from '@/networks/api'
import { Order } from '@/types/OrderType'
import { Product } from '@/types/ProductType'
import { VariantOption } from '@/types/VariantOptionType'
import { VariantOptionValue } from '@/types/VariantOptionValueType'
import { Variant } from '@/types/VariantType'
import statusChecker from '@/utils/statusChecker'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import formatToIDR from '@/lib/IdrUtils'

interface CardOrderProps {
    order: Order
}

function formatDate(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}${month}${day}`
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

    const formattedDate =
        order.updatedAt instanceof Date
            ? formatDate(order.updatedAt)
            : formatDate(new Date(order.updatedAt))

    if (product) {
        return (
            <div className="mb-2">
                <div className="border border-lightGray rounded-md flex flex-col gap-3">
                    <div className="flex justify-between border-b p-3">
                        <div className="flex flex-col gap-1">
                            <p className={`${labelColor} w-fit font-semibold rounded p-1 text-sm`}>
                                {order.status}
                            </p>
                            <p className="text-gray text-sm">
                                INV/{formattedDate}/MPL/{order.invoiceNumber}
                            </p>
                        </div>
                        <div>
                            <Button variant={'outline'}>{buttonText}</Button>
                        </div>
                    </div>
                    <Link to={`/order/detail/${order.id}`}>
                        <div className="w-full flex flex-row px-3 pb-3">
                            <img className="w-14 mr-2" src="../../public/tshirt.png" alt="" />
                            <div className="w-full flex flex-row justify-between items-center">
                                <div>
                                    <h1 className="text-sm font-semibold">
                                        {product.name} -{variantOption?.name}
                                        <span className="mx-1">|</span>
                                        {product.description}
                                        <span className="mx-1">-</span>
                                        {variant?.variantOption?.name}
                                    </h1>
                                    <div className="flex items-center text-gray text-sm">
                                        <p className="mr-1">{variantOptionValue?.stock}</p>
                                        <span>Barang</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-gray text-sm font-normal">Total Belanja</p>
                                    <p className="font-medium text-sm">
                                        {formatToIDR(order.price)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
    return null
}
