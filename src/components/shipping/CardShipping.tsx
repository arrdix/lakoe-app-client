import { Switch } from "@/components/ui/switch"

interface CardShippingProps {
    name: string,
    image: string
}

export default function CardShipping({ name, image }: CardShippingProps) {
    return (
        <div className="h-24 px-5 flex flex-row justify-between items-center border border-lightGray bg-white">
            <div className="flex flex-row items-center gap-3">
                <p>{name}</p>
                <img className="w-14" src={image} alt="" />
            </div>
            <div>
                <Switch />
            </div>
        </div>
    )
}
