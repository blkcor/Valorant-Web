import React, { useEffect, useState } from 'react';
import TextImage from '../../textImage/TextImage';
import axios from 'axios'
type MapsProps = {
  cover: string,
  text: string
};


interface Map {
  text: string,
  url: string,
  cover: string
}


const Maps: React.FC<MapsProps> = ({ cover, text }) => {

  return (
    <div className='flex flex-2/3'>
      <TextImage img={cover} text={text} />
    </div>
  )
}
export default Maps;
