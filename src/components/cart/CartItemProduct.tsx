import formatToIDR from '@/lib/IdrUtils'
import API from '@/networks/api'
import { ProductBySku } from '@/types/ProductBySkuType'
import { useEffect, useState } from 'react'

interface CartItemProductProps {
    sku: string
    qty: number
    price: number
}

function CartItemProduct({ sku, qty, price }: CartItemProductProps) {
    const [product, setProduct] = useState<ProductBySku>()

    useEffect(() => {
        async function GET_PRODUCT() {
            const product = await API.PRODUCT.GET_ONE_BY_SKU(sku)
            setProduct(product)
        }

        GET_PRODUCT()
    }, [])

    if (product && product.variant && product.variant.variantOption)
        return (
            <div className="flex gap-2">
                <div className="w-16 h-16 bg-cyan-500 rounded-md flex items-center justify-center shadow-md">
                    <img
                        src={product.attachments[0]}
                        alt="sepatu"
                        className="w-full h-full object-cover border border-cyan rounded-md"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-gray">
                        {product && product.variant && product.variant.variantOption.name} - {qty}
                        Pc(s)
                    </p>
                    <p className="text-base font-semibold mt-auto">{formatToIDR(price)}</p>
                </div>
            </div>
        )
}

export default CartItemProduct
