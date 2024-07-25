import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'

interface GeoSearchControlProps {
    setPosition: (position: L.LatLng) => void
}

export function SearchField({ setPosition }: GeoSearchControlProps) {
    const map = useMap()

    useEffect(() => {
        const provider = new OpenStreetMapProvider()
        const searchControl = GeoSearchControl({
            provider: provider,
            style: 'bar',
            showMarker: false,
            showPopup: false,
            marker: {
                icon: new L.Icon.Default(),
                draggable: true,
            },
            maxMarkers: 1,
        })

        map.addControl(searchControl)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map.on('geosearch/showlocation', (result: any) => {
            const latlng = L.latLng(result.location.y, result.location.x)
            setPosition(latlng)
            map.flyTo(result.location, map.getZoom())
        })

        return () => {
            map.removeControl(searchControl)
        }
    }, [map, setPosition])

    return null
}
