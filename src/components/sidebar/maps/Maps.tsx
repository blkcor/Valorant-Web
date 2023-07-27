import React from 'react';
import TextImage from '../../textImage/TextImage';

type MapsProps = {

};

const Maps: React.FC<MapsProps> = () => {

  return (
    <div className='flex flex-2/3'>
      <TextImage img='/map/bind.jpg' text='源工重镇' />
    </div>
  )
}
export default Maps;
