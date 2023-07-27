import { Marker, useMapEvents, Popup } from 'react-leaflet'
import { LatLng } from 'leaflet'
import { useState } from 'react'

function LocationMarker() {
  const [position, setPosition] = useState<LatLng>(null as unknown as LatLng)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


export default LocationMarker
