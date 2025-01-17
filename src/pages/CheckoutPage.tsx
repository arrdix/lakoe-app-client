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
import { Courier } from '@/types/CourierType'
import { CartItem } from '@/types/CartItemType'

// const CheckoutSchema = z.object({
//     receiverName: z
//         .string()
//         .min(4, { message: 'Nama penerima minimal 4 karakter' })
//         .max(100, { message: 'Nama penerima minimal 100 karakter' }),

//     receiverEmail: z
//         .string()
//         .min(1, { message: 'Email harus diisi' })
//         .email('Format email tidak valid'),

//     receiverPhone: z
//         .string()
//         .min(1, { message: 'Nomor telepon harus diisi' })
//         .refine((value) => /^\d+$/.test(value), {
//             message: 'Nomor telepon harus berupa angka',
//         }),

//     receiverDistrict: z.string().min(1, { message: 'Kecamatan harus dipilih' }),

//     receiverVillage: z.string().min(1, { message: 'Kelurahan harus dipilih' }),

//     receiverAddress: z
//         .string()
//         .min(4, { message: 'Deskripsi harus minimal 4 karakter' })
//         .max(3000, { message: 'Deskripsi maksimal 3000 karakter' }),

//     notes: z.string().max(3000, { message: 'Deskripsi maksimal 3000 karakter' }),
// })

interface LatLngType {
    lat: number
    lng: number
}

function CheckoutPage() {
    const [targetCart, setTargetCart] = useState<Cart>()
    const [storeId, setStoreId] = useState<number>(0)
    const [orderedProducts, setOrderedProducts] = useState<OrderedProduct[]>([])
    const [receiverLocation, setReceiverLocation] = useState<LatLngExpression | null>()
    const [selectedCourier, setSelectedCourier] = useState<Courier>()
    // const [productQty, setProductQty] = useState<number>(0)
    // const [productSKUs, setProductSKUs] = useState<string[]>([])

    const hookForm = useForm<CreateOrderDto>()
    const { setValue } = hookForm
    const hookForm2 = useForm<CheckoutDto>()

    const location = useLocation()

    const onCheckout = async (data: CreateOrderDto) => {
        console.log(data)
        try {
            // handle single checkout
            if (!targetCart) {
                const cart: Cart = await API.CART.CREATE({
                    discount: 0,
                    storeId: storeId,
                })

                console.log(cart)

                setTargetCart(cart)

                for (const orderedProduct of orderedProducts) {
                    await API.CART_ITEM.CREATE({
                        cartId: cart.id,
                        qty: orderedProduct.qty,
                        sku: orderedProduct.sku,
                        storeId: storeId,
                    })
                }

                if (selectedCourier) {
                    const courier = await API.COURIER.CREATE({
                        courierCode: selectedCourier.courierCode,
                        courierServiceCode: selectedCourier.serviceCode,
                        courierServiceName: selectedCourier.serviceName,
                        price: selectedCourier.courierPrice,
                    })
                    const transaction = await API.ORDER.CREATE({
                        ...data,
                        status: 'Belum Dibayar',
                        serviceCharge: courier.price,
                        courierId: courier.id,
                        cartId: cart.id,
                    })
                    return window.snap.pay(transaction.token)
                }
            }

            // handle multiple checkout
            if (selectedCourier && targetCart) {
                const courier = await API.COURIER.CREATE({
                    courierCode: selectedCourier.courierCode,
                    courierServiceCode: selectedCourier.serviceCode,
                    courierServiceName: selectedCourier.serviceName,
                    price: selectedCourier.courierPrice,
                })
                const transaction = await API.ORDER.CREATE({
                    ...data,
                    status: 'Belum Dibayar',
                    serviceCharge: courier.price,
                    courierId: courier.id,
                    cartId: targetCart.id,
                })
                window.snap.pay(transaction.token)
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    function onPositionChange(pos: LatLngExpression | null) {
        setReceiverLocation(pos)

        const postion = receiverLocation as LatLngType
        setValue('receiverLatitude', postion.lat)
        setValue('receiverLongtitude', postion.lng)
    }

    function onPickCourier(courier: Courier) {
        setSelectedCourier(courier)
    }

    useEffect(() => {
        const { state } = location

        // handle multiple product checkout
        if (state.cart) {
            const cart: Cart = state.cart
            const cartItems: CartItem[] | null = cart.cartItems ? cart.cartItems : null

            setTargetCart(cart)
            setStoreId(cart.storeId)

            if (cartItems && cartItems.length) {
                const orderedProducts: OrderedProduct[] = cartItems.map((item) => {
                    const sku = item.variantOptionValues ? item.variantOptionValues.sku : ''
                    return {
                        sku: sku,
                        qty: item.qty,
                    }
                })

                return setOrderedProducts(orderedProducts)
            }
        }

        // handle single product checkout
        setStoreId(state.storeId)
        setOrderedProducts(state.orderedProducts)
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
                        {receiverLocation && (
                            <DeliveryMethods
                                orderedProducts={orderedProducts}
                                receiverLocation={receiverLocation}
                                hookForm={hookForm2}
                                onPickCourier={onPickCourier}
                            />
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-2/6 relative top-6">
                    {/* <PaymentSummar2/> */}
                    <PaymentSummary
                        orderedProducts={orderedProducts}
                        selectedCourier={selectedCourier}
                    />

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
