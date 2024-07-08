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
        <div className="flex flex-col gap-6 w-full h-screen px-10 py-12">
            <h1 className="flex items-center gap-2 text-lg font-light">
                <BiHomeAlt fontSize={'1.5rem'} />
                Dashboard
            </h1>
            <Link to="/product/new">
                <h1 className="flex items-center gap-2 text-lg font-light">
                    <BiPackage fontSize={'1.5rem'} />
                    Produk
                </h1>
            </Link>
            <h1 className="flex items-center gap-2 text-lg font-light">
                <BiCart fontSize={'1.5rem'} />
                Pesanan
            </h1>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h1 className="flex items-center gap-2 text-lg font-light">
                            <BiSpa fontSize={'1.5rem'} />
                            Pengaturan
                        </h1>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col justify-center gap-4 ml-8 py-6">
                        <h1 className="flex items-center gap-2 text-lg font-light">
                            <BiCart fontSize={'1.5rem'} />
                            Pesanan
                        </h1>
                        <h1 className="flex items-center gap-2 text-lg font-light">
                            <BiCart fontSize={'1.5rem'} />
                            Pesanan
                        </h1>
                        <h1 className="flex items-center gap-2 text-lg font-light">
                            <BiCart fontSize={'1.5rem'} />
                            Pesanan
                        </h1>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Navigation
