import React from 'react';
import { ImageOverlay, MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "./mapview.css"
import { LatLngBoundsExpression } from 'leaflet';
import LocationMarker from '../locationMaker/LocationMaker';

interface Position {
  sx: string,
  sy: string,
  px: string,
  py: string
}

type MapViewProps = {
  url: string,
  position: Position
};

const initSize = 120
const bounds = [
  [-initSize, -initSize],
  [initSize, initSize],
]
// const position = [51.498, -0.07] 


const MapView: React.FC<MapViewProps> = ({ url, position }) => {

  return (
    <MapContainer className='map' center={[0, 0]} zoom={2} bounds={bounds as LatLngBoundsExpression}>
      <ImageOverlay bounds={bounds as LatLngBoundsExpression} url={url} zIndex={100}></ImageOverlay>
      <LocationMarker position={position} />
    </MapContainer>
  )
}
export default MapView;
