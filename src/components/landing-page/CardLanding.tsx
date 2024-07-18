import formatToIDR from "@/lib/IdrUtils"

interface CardLandingProps {
    product?: string
    price?: number
}
export default function CardLanding({ product, price }: CardLandingProps) {

    return (
        <div className="max-w-xs rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="overflow-hidden rounded-xl">
                <img
                    className="object-cover w-full h-96 transition-transform duration-500 hover:scale-105"
                    src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2022/10/large-1666270672-7760e9757bb20409006827097590db63.jpg"
                    alt="Black Panther Suit"
                />
            </div>
            <div className="flex flex-col just items-start my-1 py-1">
                <h3 className="text-lg font-medium">{product}</h3>
                <span className="text-base font-medium">{price && formatToIDR(price)}</span>
            </div>
        </div>
    )
}
