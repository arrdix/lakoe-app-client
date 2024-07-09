import { Button } from "@/components/ui/button"
import { BiLink } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default function CardFooter() {
    return (
        <div className="flex flex-row gap-2">
            <Button variant={"outline"}>Ubah Harga</Button>
            <Button variant={"outline"}>Ubah Stock</Button>
            <Button variant={"outline"}>
                <BiLink className="mr-1" />
                Lihat Halaman
            </Button>
            <Button className="px-3" variant={"outline"}>
                <BiDotsHorizontalRounded />
            </Button>
        </div>
    )
}
