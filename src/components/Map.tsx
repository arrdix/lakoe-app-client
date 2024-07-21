import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationMarker from './LocationMarker'
import { CreateOrderDto } from '@/dtos/OrderDto'
import { UseFormReturn } from 'react-hook-form'

interface SimpleMapProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateOrderDto, any, undefined>
}

function SimpleMap({ hookForm }: SimpleMapProps) {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: '100%', width: '100%', zIndex: '10' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker hookForm={hookForm} />
            </MapContainer>
        </div>
    )
}

export default SimpleMap
