interface CardHeaderProps {
    text: string;
}

export default function CardHeader({ text }: CardHeaderProps) {
    return (
        <div className="w-full flex flex-row">
            <h1 className="text-lg font-semibold uppercase">{text}</h1>
        </div>
    )
}
