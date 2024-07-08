interface CardImageProps {
    image: string
}

export default function CardImage({ image }: CardImageProps) {
    return (
        <div>
            <img className="w-24 h-24" src={image} alt="" />
        </div>
    )
}
