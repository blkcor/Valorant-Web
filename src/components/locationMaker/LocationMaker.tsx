import { Marker, useMapEvent, Popup } from 'react-leaflet'
import { LatLng } from 'leaflet'
import { useState } from 'react'


interface Position {
  sx: string,
  sy: string,
  px: string,
  py: string
}

type LocationMarkerProp = {
  position: Position
}

const LocationMarker: React.FC<LocationMarkerProp> = ({ position: initialPosition }) => {
  const [position, setPosition] = useState<LatLng>(initialPosition as unknown as LatLng)
  useMapEvent("click", (e) => {
    setPosition(e.latlng)
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


export default LocationMarker
