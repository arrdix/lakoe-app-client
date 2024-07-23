export type GetRatesDto = {
    origin_latitude: number
    origin_longitude: number
    destination_latitude: number
    destination_longitude: number
    couriers: string
    items: ItemsDto[]
}

type ItemsDto = {
    name: string
    description: string
    value: number
    weight: number
    quantity: number
}
