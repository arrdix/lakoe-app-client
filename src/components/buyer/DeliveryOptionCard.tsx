import formatToIDR from '@/lib/IdrUtils'

interface DeliveryOptionCardProops {
    name: string
    service: string
    price: number
}

export default function DeliveryOptionCard({ name, service, price }: DeliveryOptionCardProops) {
    return (
        <div className="flex items-center justify-between h-full w-full">
            <div className="flex flex-col items-start">
                <img
                    src={`https://static.desty.app/desty-store/logistic-files/${name}.png`}
                    alt={name}
                    className="h-7"
                />
                <p className="ml-1 text-black font-medium text-xs">{service}</p>
            </div>
            <div className="">
                <p className="text-blue-600 text-md">{formatToIDR(price)}</p>
            </div>
        </div>
    )
}
