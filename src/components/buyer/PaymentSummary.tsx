import formatToIDR from '@/lib/IdrUtils'
import API from '@/networks/api'
import { ProductBySku } from '@/types/ProductBySkuType'
import React, { useEffect, useState } from 'react'

interface PaymentSummaryProps {
    skus: string[]
    qty: number
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ skus, qty }) => {
    const [products, setProducts] = useState<ProductBySku[]>([])
    const [totalProductPrice, settotalProductPrice] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const deliveryPrice = 13000
    const serviceCharge = 3500

    useEffect(() => {
        async function GET_PRODUCT() {
            const requestedProducts: ProductBySku[] = []
            let currentTotalProductPrice = 0

            for (const sku of skus) {
                const product = await API.PRODUCT.GET_ONE_BY_SKU(sku)
                requestedProducts.push(product)

                currentTotalProductPrice =
                    product.variant &&
                    product.variant.variantOption &&
                    product.variant.variantOption.variantOptionValue &&
                    product.variant.variantOption.variantOptionValue.price * qty
            }

            setProducts(requestedProducts)
            settotalProductPrice(currentTotalProductPrice)
            setTotalPrice(currentTotalProductPrice + deliveryPrice + serviceCharge)
        }
        GET_PRODUCT()
    }, [])

    return (
        <div className="w-full bg-cyan bg-opacity-10 border border-cyan rounded-lg shadow p-7 flex flex-col gap-6">
            <div>
                <h1 className="text-black text-xl font-bold mb-4">Ringkasan Pesanan</h1>
                <div className="flex flex-col bg-transparent w-full gap-4">
                    {products.map((product) => {
                        const price =
                            product.variant &&
                            product.variant.variantOption &&
                            product.variant.variantOption.variantOptionValue &&
                            product.variant.variantOption.variantOptionValue.price

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
                                    <p className="text-xs text-gray">{qty} Pc(s)</p>
                                    <p className="text-base font-semibold mt-auto">
                                        {price && formatToIDR(price)}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {/* total harga */}
                <div className="flex justify-between">
                    <p className="text-gray-700">Total Harga</p>
                    <p className="text-lg font-semibold">{formatToIDR(totalProductPrice)}</p>
                </div>
                {/* biaya pengiriman */}
                <div className="flex justify-between">
                    <p className="text-gray-700">Biaya Pengiriman</p>
                    <p className="font-semibold">{formatToIDR(deliveryPrice)}</p>
                </div>
                {/* biaya pembayaran */}
                <div className="flex justify-between pb-4 -mt-2 border-b-2 border-gray-300">
                    <p className="text-gray-700">Biaya Admin</p>
                    <p className="font-semibold">{formatToIDR(serviceCharge)}</p>
                </div>
                {/* total pembayaran */}
                <div className="flex justify-between mt-2">
                    <p className="text-gray-700 font-semibold">Total Pembayaran</p>
                    <p className="text-xl font-bold text-gray-800">{formatToIDR(totalPrice)}</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentSummary
