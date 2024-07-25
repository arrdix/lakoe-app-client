import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationMarker from './LocationMarker'
import { LatLngExpression } from 'leaflet'

interface SimpleMapProps {
    onPositionChange: (pos: LatLngExpression | null) => void
}

function SimpleMap({ onPositionChange }: SimpleMapProps) {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <MapContainer
                center={[-6.2114, 106.8446]}
                zoom={13}
                style={{ height: '100%', width: '100%', zIndex: '10' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker onPositionChange={onPositionChange} />
            </MapContainer>
        </div>
    )
}

export default SimpleMap
