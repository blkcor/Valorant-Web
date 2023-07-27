import React from 'react';
import { ImageOverlay, MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "./mapview.css"
import { LatLngBoundsExpression } from 'leaflet';
import LocationMarker from '../locationMaker/LocationMaker';

type MapViewProps = {
  url: string
};

const initSize = 120
const bounds = [
  [-initSize, -initSize],
  [initSize, initSize],
]
// const position = [51.498, -0.07] 


const MapView: React.FC<MapViewProps> = ({ url }) => {

  return (
    <MapContainer className='map' center={[0, 0]} zoom={2} bounds={bounds as LatLngBoundsExpression}>
      <TileLayer
        url=''
      />
      <ImageOverlay bounds={bounds as LatLngBoundsExpression} url='/a.svg' zIndex={100}></ImageOverlay>
      <LocationMarker />
    </MapContainer>
  )
}
export default MapView;
