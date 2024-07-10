import CardProduct from '@/components/card/CardProduct'
export default function ProductList() {
    return (
        // Edit flex gap
        <div className="flex flex-col gap-2">
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
        </div>
    )
}
