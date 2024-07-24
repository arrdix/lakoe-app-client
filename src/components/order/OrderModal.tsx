import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface OrderModalProps {
    courierName: string
    wayBill: string
    storeName: string
    shipperName: string
    shipperPhone: string
    trackingStatus: string
}

export default function OrderModal({
    courierName,
    wayBill,
    storeName,
    shipperName,
    shipperPhone,
    trackingStatus,
}: OrderModalProps) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Lacak Pengiriman</DialogTitle>
                <DialogDescription className="text-black flex flex-col gap-1">
                    <div className="w-full flex flex-row justify-between p-2">
                        <div className="w-1/4 flex flex-col gap-3">
                            <div>
                                <p>Kurir</p>
                                <p className="font-semibold">{courierName.toUpperCase()}</p>
                            </div>
                            <div>
                                <p>Pengirim</p>
                                <p className="font-semibold">{storeName}</p>
                            </div>
                        </div>
                        <div>
                            <p>Sprinter</p>
                            <p className="font-semibold">{shipperName}</p>
                            <p>{shipperPhone}</p>
                        </div>
                    </div>
                    <p>
                        Status: <span className="font-semibold">{trackingStatus}</span>
                    </p>
                    <div className="flex flex-col rounded-lg bg-white">
                        <p className="text-4xl font-bold">{wayBill}</p>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}
