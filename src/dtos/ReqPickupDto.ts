export type ReqPickupDto = {
    invoice_id: number
    origin_contact_name: string
    origin_contact_phone: string
    origin_address: string
    origin_coordinate: Coordinate
    destination_contact_name: string
    destination_contact_phone: string
    destination_contact_email: string
    destination_address: string
    destination_coordinate: Coordinate
    courier_company: string
    courier_type: string
    delivery_type: string
    items: Item[]
}

type Coordinate = {
    latitude: number
    longitude: number
}

type Item = {
    name: string
    description: string
    value: number
    weight: number
    quantity: number
}
