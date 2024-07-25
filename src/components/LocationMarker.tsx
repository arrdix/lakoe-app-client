import { LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

interface LocationMarkerProps {
    onPositionChange: (pos: LatLngExpression | null) => void
}

function LocationMarker({ onPositionChange }: LocationMarkerProps) {
    const [position, setPosition] = useState<LatLngExpression | null>(null)

    useEffect(() => {
        onPositionChange(position)
    }, [position])

    const map = useMapEvents({
        locationfound(e) {
            map.flyTo(e.latlng, map.getZoom())
        },
        click(e) {
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
