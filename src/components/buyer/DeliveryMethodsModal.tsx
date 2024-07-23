import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Button } from '../ui/button'
import { LiaTimesSolid } from 'react-icons/lia'
import DeliveryOptionCard from './DeliveryOptionCard'
import { UseFormReturn } from 'react-hook-form'
import { CheckoutDto } from '@/dtos/CheckoutDto'
import formatToIDR from '@/lib/IdrUtils'
import { OrderedProduct } from '@/types/OrderedProductType'
import API from '@/networks/api'
import { ProductBySku } from '@/types/ProductBySkuType'
import { Courier } from '@/types/CourierType'
import Spinner from '@/components/utils/Spinner'

interface ValidatedInputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CheckoutDto, any, undefined>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    receiverLocation: any
    orderedProducts: OrderedProduct[]
    onPickCourier: (courier: Courier) => void
}

export default function DeliveryMethodsModal({
    receiverLocation,
    orderedProducts,
    hookForm,
    onPickCourier,
}: ValidatedInputProps) {
    const [open, setOpen] = useState(false)
    const [selectedCourier, setSelectedCourier] = useState<Courier>()
    const { setValue } = hookForm
    const [couriers, setCouriers] = useState<Courier[]>()

    useEffect(() => {
        if (selectedCourier) {
            onPickCourier(selectedCourier)
        }
    }, [selectedCourier])

    async function onSelectDeliveryMethod() {
        const requestedProducts: ProductBySku[] = []

        for (const orderedProduct of orderedProducts) {
            const product = await API.PRODUCT.GET_ONE_BY_SKU(orderedProduct.sku)
            requestedProducts.push(product)
        }

        if (requestedProducts.length) {
            const couriers: Courier[] = await API.COURIER.GET_RATES({
                origin_latitude: -6.3031123, // change to real store pos
                origin_longitude: 106.7794934999, // change to real store pos
                destination_latitude: receiverLocation.lat,
                destination_longitude: receiverLocation.lng,
                couriers: 'grab,jne,tiki',
                items: requestedProducts.map((product) => {
                    const variantOptionValue =
                        product.variant &&
                        product.variant.variantOption &&
                        product.variant.variantOption.variantOptionValue

                    return {
                        name: product.name,
                        description: product.description,
                        value: variantOptionValue ? variantOptionValue.price : 0,
                        weight: variantOptionValue ? variantOptionValue.weight : 0,
                        quantity: 1,
                    }
                }),
            })

            setCouriers(couriers)
        }
    }

    return (
        <div>
            {/* Trigger */}

            {!selectedCourier ? (
                <Button
                    type="button"
                    onClick={() => {
                        setOpen(true)
                        onSelectDeliveryMethod()
                    }}
                    className="rounded-lg p-1 border-none bg-cyan px-14 py-6"
                >
                    <p className="mx-2 text-md font-semibold">Pilih Metode Pengiriman</p>
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="rounded-sm p-3 border-2 border-cyan bg-transparent w-72 h-20 flex justify-between hover:bg-blue-100"
                >
                    <div className="w-1/3 h-full flex flex-col items-start">
                        <img
                            src={`https://static.desty.app/desty-store/logistic-files/${selectedCourier.courierCode}.png`}
                            alt="courier logo"
                            className="w-20"
                        />
                        <p className="ml-2 text-black text-xs relative top-1 font-semibold">
                            {selectedCourier.serviceName}
                        </p>
                    </div>

                    <div className="w-2/3 flex justify-end">
                        <p className="font-bold text-blue-500">
                            {formatToIDR(selectedCourier.courierPrice)}
                        </p>
                    </div>
                </Button>
            )}

            {/* Background Overlay */}
            {open && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform px-8 py-3 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-gray-50 flex items-center justify-center border-b pb-3 mb-6">
                                <Button
                                    variant="outline"
                                    className="p-2 border-none hover:bg-white absolute top-0 right-2"
                                    onClick={() => {
                                        setOpen(false)
                                        onSelectDeliveryMethod()
                                    }}
                                >
                                    <LiaTimesSolid />
                                </Button>
                                <p className="text-xl font-semibold">Pilih metode pengiriman</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    {couriers && couriers.length ? (
                                        couriers.map((courier, index) => (
                                            <Button
                                                key={index}
                                                onClick={() => {
                                                    setOpen(false)
                                                    setValue('deliveryMethod', courier.courierCode)
                                                    setSelectedCourier({
                                                        courierCode: courier.courierCode,
                                                        serviceCode: courier.serviceCode,
                                                        serviceName: courier.serviceName,
                                                        courierPrice: courier.courierPrice,
                                                    })
                                                }}
                                                className="bg-white p-2 h-14 border border-transparent hover:bg-transparent hover:border hover:border-cyan rounded-sm"
                                            >
                                                <DeliveryOptionCard
                                                    key={index}
                                                    name={courier.courierCode}
                                                    service={courier.serviceName}
                                                    price={courier.courierPrice}
                                                />
                                            </Button>
                                        ))
                                    ) : (
                                        <div className="w-full h-24 flex justify-center items-center">
                                            <Spinner size={6} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
