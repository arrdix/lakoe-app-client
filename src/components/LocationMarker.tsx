import { LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { CreateOrderDto } from '@/dtos/OrderDto'
import { UseFormReturn } from 'react-hook-form'

interface LocationMarkerProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateOrderDto, any, undefined>
    onPositionChange: (pos: LatLngExpression | null) => void
}

function LocationMarker({ onPositionChange, hookForm }: LocationMarkerProps) {
    const [position, setPosition] = useState<LatLngExpression | null>(null)
    const { setValue } = hookForm

    useEffect(() => {
        onPositionChange(position)
    }, [position])

    const map = useMapEvents({
        locationfound(e) {
            map.flyTo(e.latlng, map.getZoom())
        },
        click(e) {
            setValue('receiverLatitude', e.latlng.lat)
            setValue('receiverLongtitude', e.latlng.lng)
            setPosition(e.latlng)
        },
    })

    useEffect(() => {
        map.locate()
    }, [map])

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default LocationMarker
