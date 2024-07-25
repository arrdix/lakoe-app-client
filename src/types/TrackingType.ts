export type Tracking = {
    id: number
    shipper: Shipper
    originName: string
    courier: Courier
}

type Shipper = {
    name: string
    email: string
    phone: string
    organization: string
}

type Courier = {
    trackingId: string
    waybillId: string
    company: string
}
