import { useEffect, useState } from 'react'
import ContactInformation from '@/components/buyer/ContactInformation'
import InsertVoucherModal from '@/components/buyer/InsertVoucherModal'
import Note from '@/components/buyer/Note'
import DeliveryMethods from '@/components/buyer/DeliveryMethods'
import ShippingAddress from '@/components/buyer/ShippingAddress'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { CheckoutDto } from '@/dtos/CheckoutDto'
import { CreateOrderDto } from '@/dtos/OrderDto'
import axios from 'axios'
import PaymentSummary from '@/components/buyer/PaymentSummary'
import { useLocation } from 'react-router-dom'
import API from '@/networks/api'
import { Cart } from '@/types/CartType'
import { OrderedProduct } from '@/types/OrderedProductType'
import { LatLngExpression } from 'leaflet'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const CheckoutSchema = z.object({
    receiverName: z
        .string()
        .min(4, { message: "Nama penerima minimal 4 karakter" })
        .max(100, { message: "Nama penerima minimal 100 karakter" }),

    receiverEmail: z
        .string()
        .min(1, { message: "Email harus diisi" })
        .email("Format email tidak valid"),

    receiverPhone: z
        .string()
        .min(1, { message: "Nomor telepon harus diisi" })
        .refine(value => /^\d+$/.test(value), {
            message: "Nomor telepon harus berupa angka",
        }),

    receiverDistrict: z
        .string()
        .min(1, { message: "Kecamatan harus dipilih" }),

    receiverVillage: z
        .string()
        .min(1, { message: "Kelurahan harus dipilih" }),

    receiverAddress: z
        .string()
        .min(4, { message: "Deskripsi harus minimal 4 karakter" })
        .max(3000, { message: "Deskripsi maksimal 3000 karakter" }),

    notes: z
        .string()
        .max(3000, { message: "Deskripsi maksimal 3000 karakter" })
})

function CheckoutPage() {
    const [storeId, setStoreId] = useState<number>(0)
    const [orderedProducts, setOrderedProducts] = useState<OrderedProduct[]>([])
    const [receiverLocation, setReceiverLocation] = useState<LatLngExpression | null>()
    // const [productQty, setProductQty] = useState<number>(0)
    // const [productSKUs, setProductSKUs] = useState<string[]>([])

    const hookForm = useForm<CreateOrderDto>({
        resolver: zodResolver(CheckoutSchema)
    })
    const hookForm2 = useForm<CheckoutDto>()

    const location = useLocation()

    const onCheckout = async (data: CreateOrderDto) => {
        console.log(data)

        try {
            // only if cartId isn't exist
            const cart: Cart = await API.CART.CREATE({
                discount: 0,
                storeId: storeId,
            })

            for (const orderedProduct of orderedProducts) {
                await API.CART_ITEM.CREATE({
                    cartId: cart.id,
                    qty: orderedProduct.qty,
                    sku: orderedProduct.sku,
                    storeId: storeId,
                })
            }

            const courier = await API.COURIER.CREATE({
                courierCode: 'EXAMPLE_COURIER_CODE',
                courierServiceCode: 'EXAMPLE_SERVICE_GJK',
                courierServiceName: 'EXAMPLE_GOJEK',
                price: 13000, // example courier price
            })

            const transaction = await API.ORDER.CREATE({
                ...data,
                status: 'BELUM DIBAYAR',
                serviceCharge: courier.price,
                courierId: courier.id,
                cartId: cart.id,
            })

            window.snap.pay(transaction.token)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    // on marker change
    function onPositionChange(pos: LatLngExpression | null) {
        setReceiverLocation(pos)
        console.log(pos);
    }

    // on select delivery
    async function onSelectDeliveryMethod() {
        const selectDelivery = await API.COURIER.GET_RATES(
            {
                origin_latitude: -6.3031123,
                origin_longitude: 106.7794934999,
                destination_latitude: -6.2441792,
                destination_longitude: 106.783529,
                couriers: "grab,jne,tiki",
                items: [
                    {
                        name: "Shoes",
                        description: "Black colored size 45",
                        value: 199000,
                        length: 30,
                        width: 15,
                        height: 20,
                        weight: 200,
                        quantity: 2
                    }
                ]
            }
        )
        console.log("res", selectDelivery);
    }

    useEffect(() => {
        const { state } = location

        setStoreId(state.storeId)
        setOrderedProducts(state.orderedProducts)
        // setProductQty(state.orderedProduct.qty)
        // setProductSKUs(state.orderedProduct.skus)
    }, [])

    const { handleSubmit } = hookForm

    return (
        <div className=" w-4/5 h-full bg-white px-8 py-8 mt-8">
            <div className="flex gap-10">
                <div className="flex flex-col gap-2 w-4/6">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-4xl">Checkout</h1>
                        <img className="w-16 mb-3" src="Add to Cart-amico.png" alt="icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <ContactInformation hookForm={hookForm} />
                        <ShippingAddress onPositionChange={onPositionChange} hookForm={hookForm} />
                        <DeliveryMethods onSelectDeliveryMethod={onSelectDeliveryMethod} hookForm={hookForm2} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-2/6 relative top-6">
                    {/* <PaymentSummar2/> */}
                    <PaymentSummary orderedProducts={orderedProducts} />

                    <InsertVoucherModal />
                    <Note hookForm={hookForm} />
                    <Button
                        type="button"
                        className="rounded-lg p-1 border=none bg-cyan px-14 py-6 w-full"
                        onClick={handleSubmit((data) => {
                            onCheckout(data)
                        })}
                    >
                        <p className="mx-2 text-md font-semibold">Bayar sekarang</p>
                        <FaArrowRight size={20} className="text-white mr-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
