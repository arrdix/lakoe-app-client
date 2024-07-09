import { BiPackage, BiHomeAlt, BiCart, BiSpa } from 'react-icons/bi'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="flex flex-col gap-2 w-full h-full px-4 py-12">
            <Link to="/">
                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                    <BiHomeAlt fontSize={'1.5rem'} />
                    Dashboard
                </h1>
            </Link>
            <Link to="/product">
                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                    <BiPackage fontSize={'1.5rem'} />
                    Produk
                </h1>
            </Link>
            <Link to="order">
                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                    <BiCart fontSize={'1.5rem'} />
                    Pesanan
                </h1>
            </Link>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                            <BiSpa fontSize={'1.5rem'} />
                            Pengaturan
                        </h1>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col justify-center py-2">
                        <Link to="setting">
                            <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                                Atur Toko
                            </h1>
                        </Link>
                        <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Pengiriman
                        </h1>
                        <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Metode Pembayaran
                        </h1>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Navigation
