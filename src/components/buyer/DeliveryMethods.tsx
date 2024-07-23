import DeliveryMethodsModal from './DeliveryMethodsModal'
import { UseFormReturn } from 'react-hook-form'
import { CheckoutDto } from '@/dtos/CheckoutDto'
import { LatLngExpression } from 'leaflet'
import { OrderedProduct } from '@/types/OrderedProductType'
import { Courier } from '@/types/CourierType'

interface ValidatedInputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CheckoutDto, any, undefined>
    receiverLocation: LatLngExpression
    orderedProducts: OrderedProduct[]
    onPickCourier: (courier: Courier) => void
}

export default function DeliveryMethods({
    receiverLocation,
    orderedProducts,
    hookForm,
    onPickCourier,
}: ValidatedInputProps) {
    return (
        <div className="w-full bg-white rounded-lg p-8 flex flex-col gap-4 border">
            <h1 className="text-black text-xl font-bold">Metode Pengiriman</h1>

            <DeliveryMethodsModal
                receiverLocation={receiverLocation}
                orderedProducts={orderedProducts}
                hookForm={hookForm}
                onPickCourier={onPickCourier}
            />
        </div>
    )
}
