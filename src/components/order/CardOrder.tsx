import { Button } from "@/components/ui/button";
import API from "@/networks/api";
import { Order } from "@/types/OrderType";
import { Products } from "@/types/ProductType";
import { useEffect, useState } from "react";

interface CardOrderProps {
    text?: string
    color?: string
    order: Order
}

export default function CardOrder({ text, color, order }: CardOrderProps) {
    const productId = order.carts?.cartItems?.[0]?.id;
    const [product, setProduct] = useState<Products | null>(null)

    useEffect(() => {
        async function GET_PRODUCT() {
            if (productId) {
                const product: Products = await API.PRODUCT.GET_ONE(productId)
                setProduct(product)
            }

        }
        GET_PRODUCT()
    }, [])

    console.log("ok", product?.variants[0].variantOptions?.variantOptionValues);

    if (product) {
        return (
            <div>
                <div className="border border-lightGray rounded flex flex-col gap-3">
                    <div className="flex justify-between border-b p-3">
                        <div className="flex flex-col gap-1">
                            <p className={`${color} w-fit font-semibold rounded p-1 text-sm`}>{order.status}</p>
                            <p className="text-gray text-sm">{order.receiverNumber}</p>
                        </div>
                        <div>
                            <Button variant={"outline"}>{text}</Button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row px-3 pb-3">
                        <img className="w-14 mr-2" src="../../public/tshirt.png" alt="" />
                        <div className="w-full flex flex-row justify-between items-center">
                            <div>
                                <h1 className="text-sm font-semibold">
                                    {product.name} -
                                    {product.variants?.[1]?.variantOptions?.[0].name} |
                                    {product.description} -
                                    {product.variants?.[0]?.variantOptions?.[0].name}
                                </h1>
                                <p className="text-gray text-sm">
                                    {product.variants?.[0]?.variantOptions?.[0]?.variantOptionValues.stock} Barang
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
        );
    }
}
