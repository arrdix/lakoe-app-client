interface CardBodyProps {
    price: number,
    stock: number,
    sku: string
}

export default function CardBody({ price, stock, sku }: CardBodyProps) {
    return (
        <div className=" text-gray flex gap-1">
            <p className="text-black font-semibold text-sm">Rp. {price}</p>
            •
            <p className="text-sm">Stok: {stock}</p>
            •
            <p className="text-sm">SKU: {sku}</p>
        </div>
    )
}
