import React from 'react';

type FooterProps = {

};

const Footer: React.FC<FooterProps> = () => {

  return (
    <>
      <div className='flex justify-between p-6'>
        <span>ValorantTechLab</span>
        <span className='text-5 fw-700'>© blkcor and liyihwa</span>
      </div>
    </>
  )
}
export default Footer;
