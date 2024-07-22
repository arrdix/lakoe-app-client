import { CiDeliveryTruck } from 'react-icons/ci'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import AlertOrder from './AlertOrder'

interface OrderModalProps {
    courierName: string
    wayBill: string
    storeName: string
    shipperName: string
    shipperFound: string
}

export default function OrderModal({ courierName, wayBill, storeName, shipperName, shipperFound }: OrderModalProps) {

    return (
        <div className="rounded-lg flex flex-row  bg-white">
            <div>
                <CiDeliveryTruck className="mr-2 size-6 text-cyan" />
            </div>
            <div className="w-full flex-col gap-3">
                <div className="flex flex-row justify-between">
                    <p className="font-semibold mb-2">Detail Pengiriman</p>
                    <Dialog>
                        <DialogTrigger className="text-cyan font-semibold">
                            Lacak Pengiriman
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Lacak Pengiriman</DialogTitle>
                                <DialogDescription className="text-black flex flex-col gap-1">
                                    <div className="w-full flex flex-row justify-between p-2">
                                        <div className="w-96 flex flex-col gap-3">
                                            <div>
                                                <p>Kurir</p>
                                                <p className="font-semibold">
                                                    {courierName}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex">
                                                    <p>No.Resi</p>
                                                </div>
                                                <p className="font-semibold">
                                                    {wayBill}
                                                </p>
                                            </div>
                                            <div>
                                                <p>Pengirim</p>
                                                <p className="font-semibold">
                                                    {storeName}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Penerima</p>
                                            <p className="font-semibold">
                                                {shipperName}
                                            </p>
                                            <p>{shipperFound}</p>
                                        </div>
                                    </div>
                                    <p>
                                        Status:{' '}
                                        <span className="font-semibold">
                                            Dalam Proses Pengiriman
                                        </span>
                                    </p>
                                    <div className="flex flex-col border rounded-lg bg-white">
                                        <AlertOrder
                                            status="DELIVERED TO [ | 17-03-2021 11:15 | JAKARTA ]"
                                            date="Sen, 12 Agu 2023 - 10:00 WIB"
                                        />
                                        <AlertOrder
                                            status="WITH DELIVERY COURIER [JAKARTA , HUB VETERAN BINTARO]"
                                            date="Sen, 12 Agu 2023 - 10:00 WIB"
                                        />
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

            </div>
        </div>
    )
}
