import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

import L from 'leaflet'; 
import { SearchField } from "./SearchMap"
import { FaLocationDot } from "react-icons/fa6"; 
import { getAddressFromLatLng } from "./MapHooks";

const SimpleMap = () => {
  
  const [Position, setPosition] = useState<L.LatLng | null>(null); 
  const [address, setAddress] = useState<string>(''); 
  const markerRef = useRef<L.Marker<any>>(null); 
 
  const updatePosition = async (latlng: L.LatLng) => { 
    setPosition(latlng); 
    const address = await getAddressFromLatLng(latlng.lat, latlng.lng); 
     
    setAddress(address); 
  }; 
   
  useEffect(() => { 
    const handleSuccess = async (pos: GeolocationPosition) => { 
      const { latitude, longitude } = pos.coords; 
      const latLng = new L.LatLng(latitude, longitude); 
      await updatePosition(latLng); 
    }; 

    const handleError = (error: GeolocationPositionError) => { 
      console.error(error); 
    }; 
 
    if (navigator.geolocation) { 
      navigator.geolocation.watchPosition(handleSuccess, handleError); 
    } else { 
      console.error("Geolocation is not supported by this browser."); 
    } 
  }, []); 
 
  const onDragEnd = async () => { 
    const marker = markerRef.current; 
    if (marker != null) { 
      const latlng = marker.getLatLng(); 
      await updatePosition(latlng); 
    } 
  }; 


  return (
    <div> 
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "55vh", width: "100%" }}> 
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        /> 
      {Position && ( 
      <> 
      <Marker position={Position} 
       draggable={true} 
       eventHandlers={{ 
         dragend: onDragEnd 
       }} 
       ref={markerRef} 
       > 
            <Popup> 
                 
            </Popup> 
        </Marker>    
        </> 
        )} 
          <SearchField setPosition={updatePosition}/> 
    </MapContainer> 
        <div className="mt-6 py-4 flex flex-row gap-2"> 
                <FaLocationDot className="h-6 w-6" color="blue 
                "/> 
                <span className="text-lg mt-[-4px]"> 
                    {address} 
                </span> 
        </div> 
  </div> 
  );
};

export default SimpleMap;
