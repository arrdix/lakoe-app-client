interface CardImageProps {
    image: string
}

export default function CardImage({ image }: CardImageProps) {
    return (
        <div>
            <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
    )
}
