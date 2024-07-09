interface CardBodyProps {
    price: number,
    stock: number,
    sku: string
}

export default function CardBody({ price, stock, sku }: CardBodyProps) {
    return (
        <div className=" text-gray flex gap-1">
            <p className="text-black font-semibold">Rp. {price}</p>
            •
            <p>Stok: {stock}</p>
            •
            <p>SKU: {sku}</p>
        </div>
    )
}
