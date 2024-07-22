import AlertOrder from '@/components/order/AlertOrder'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface ShippingModalProps {
    shipperName: string
    shipperPhone: string
}

function ShippingModal() {
    return (
        <DialogContent className="w-full">
            <DialogHeader>
                <DialogTitle>Lacak Pengiriman</DialogTitle>
                <DialogDescription className="text-black flex flex-col gap-1">
                    <div className="w-full flex flex-row justify-between p-2">
                        <div className="w-96 flex flex-col gap-3">
                            <div>
                                <p>Kurir</p>
                                <p className="font-semibold">J&T - Regular</p>
                            </div>
                            <div>
                                <div className="flex">
                                    <p>No.Resi</p>
                                </div>
                                <p className="font-semibold">JT6268865922</p>
                            </div>
                            <div>
                                <p>Pengirim</p>
                                <p className="font-semibold">Bakulan Store</p>
                            </div>
                        </div>
                        <div>
                            <p>Penerima</p>
                            <p className="font-semibold">Petrus</p>
                            <p>081123123123</p>
                        </div>
                    </div>
                    <p>
                        Status: <span className="font-semibold">Dalam Proses Pengiriman</span>
                    </p>
                    <div className="flex flex-col border rounded-lg bg-white w-fit">
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
    )
}

export default ShippingModal
