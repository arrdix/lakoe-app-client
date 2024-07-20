import { BiPackage, BiHomeAlt, BiCart, BiSpa, BiLogOut } from 'react-icons/bi'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Link, useLocation } from 'react-router-dom'
import { useLakoeStore } from '@/store/store'
import LOCAL_STORAGE from '@/networks/storage'
import { useEffect, useState } from 'react'

function Navigation() {
    const [activePath, setActivePath] = useState<string>('')
    const { pathname } = useLocation()

    const setLoggedUser = useLakoeStore((state) => state.setLoggedUser)

    const availablePath = {
        DASHBOARD: '',
        PRODUK: 'product',
        PESANAN: 'order',
        PENGATURAN_TOKO: 'store-setting',
        PENGATURAN_PENGIRIMAN: 'store-shipping',
    }

    useEffect(() => {
        const activePath = pathname.split('/')[1]
        setActivePath(activePath)
    }, [pathname])

    function onLogout() {
        LOCAL_STORAGE.REMOVE()
        setLoggedUser(null)
    }

    return (
        <div className="flex flex-col gap-2 w-full h-full px-4 bg-white">
            <Link to="/">
                {activePath === availablePath.DASHBOARD ? (
                    <h1 className="flex items-center gap-2 px-4 py-2 mt-6 text-lg font-light rounded-lg text-cyan bg-lightergray cursor-pointer">
                        <BiHomeAlt fontSize={'1.5rem'} />
                        Dashboard
                    </h1>
                ) : (
                    <h1 className="flex items-center gap-2 px-4 py-2 mt-6 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                        <BiHomeAlt fontSize={'1.5rem'} />
                        Dashboard
                    </h1>
                )}
            </Link>
            <Link to="/product">
                {activePath === availablePath.PRODUK ? (
                    <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg text-cyan bg-lightergray cursor-pointer">
                        <BiPackage fontSize={'1.5rem'} />
                        Produk
                    </h1>
                ) : (
                    <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                        <BiPackage fontSize={'1.5rem'} />
                        Produk
                    </h1>
                )}
            </Link>
            <Link to="order">
                {activePath === availablePath.PESANAN ? (
                    <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg text-cyan bg-lightergray cursor-pointer">
                        <BiCart fontSize={'1.5rem'} />
                        Pesanan
                    </h1>
                ) : (
                    <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                        <BiCart fontSize={'1.5rem'} />
                        Pesanan
                    </h1>
                )}
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
                        <Link to="store-setting">
                            {activePath === availablePath.PENGATURAN_TOKO ? (
                                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 text-cyan bg-lightergray cursor-pointer">
                                    Atur Toko
                                </h1>
                            ) : (
                                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                                    Atur Toko
                                </h1>
                            )}
                        </Link>

                        <Link to="store-shipping">
                            {activePath === availablePath.PENGATURAN_PENGIRIMAN ? (
                                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 text-cyan bg-lightergray cursor-pointer">
                                    Pengiriman
                                </h1>
                            ) : (
                                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                                    Pengiriman
                                </h1>
                            )}
                        </Link>

                        <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Metode Pembayaran
                        </h1>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Link to="/" className="mt-auto mb-16" onClick={onLogout}>
                <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg hover:text-cyan hover:bg-lightergray cursor-pointer">
                    <BiLogOut fontSize={'1.5rem'} />
                    Logout
                </h1>
            </Link>
        </div>
    )
}

export default Navigation
