import formatToIDR from '@/lib/IdrUtils'

interface CardLandingProps {
    name: string
    price?: number
    attachment?: string
}
export default function CardLanding({ name, price, attachment }: CardLandingProps) {
    const nameSplitted = name.split('')
    const namePrepared = []
    const maxChar = 28

    if (nameSplitted.length > maxChar) {
        for (let i = 0; i < maxChar; i++) {
            namePrepared.push(nameSplitted[i])
        }
        namePrepared.push(' ...')
    }

    return (
        <div className="rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="overflow-hidden rounded-xl">
                <img
                    className="object-cover w-full h-72 transition-transform duration-500 hover:scale-105"
                    src={attachment}
                    alt="Black Panther Suit"
                />
            </div>
            <div className="flex flex-col just items-start my-1 py-1">
                <h3 className="text-lg font-medium">{namePrepared.join('')}</h3>
                <span className="text-base font-medium">{price && formatToIDR(price)}</span>
            </div>
        </div>
    )
}
