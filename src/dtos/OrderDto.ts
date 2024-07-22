export type CreateOrderDto = {
    price: number
    serviceCharge: number
    status: string
    receiverLatitude: number
    receiverLongtitude: number
    // receiverProvince: string
    // receiverCity: string
    receiverDistrict: string
    receiverVillage: string
    receiverPhone: number
    receiverAddress: string
    receiverName: string
    receiverEmail: string
    invoiceNumber: string
    notes?: string
    cartId: number
    courierId: number
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
