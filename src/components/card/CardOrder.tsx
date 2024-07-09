import { Button } from "@/components/ui/button";

interface CardOrderProps {
    status?: string
    invoice?: string
    text?: string
    tshirt?: string
    stock?: string
    price?: string
}
export default function CardOrder({ status, invoice, text, tshirt, stock, price }: CardOrderProps) {
    return (
        <div>
            <div className="border rounded flex flex-col gap-3">
                <div className="flex justify-between border-b p-3">
                    <div className="flex flex-col gap-1">
                        <p className="bg-yellow-400 w-fit font-semibold rounded p-1 text-sm">{status}</p>
                        <p className="text-gray text-sm">{invoice}</p>
                    </div>
                    <div>
                        <Button variant={"outline"}>{text}</Button>
                    </div>
                </div>
                <div className="w-full flex flex-row px-3 pb-3">
                    <img className="w-14 mr-2" src="../../public/tshirt.png" alt="" />
                    <div className="w-full flex flex-row justify-between items-center">
                        <div>
                            <h1 className="text-sm font-semibold">{tshirt}</h1>
                            <p className="text-gray text-sm">{stock} Barang</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-gray text-sm font-normal">Total Belanja</p>
                            <p className="font-medium text-sm">Rp. {price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
