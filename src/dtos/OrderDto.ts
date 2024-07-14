export type CreateOrderDto = {
    price: number
    serviceCharge: number
    status: string
    receiverLatitude: number
    receiverLongtitude: number
    receiverDistrict: string
    receiverPhone: number
    receiverAddress: string
    receiverName: string
    receiverNumber: number
}

export type UpdateOrderDto = {
    price?: number
    serviceCharge?: number
    status?: string
    receiverLatitude?: number
    receiverLongtitude?: number
    receiverDistrict?: string
    receiverPhone?: number
    receiverAddress?: string
    receiverName?: string
    receiverNumber?: number
}
