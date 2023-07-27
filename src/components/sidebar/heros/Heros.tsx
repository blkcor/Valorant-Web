import React from 'react';

type HerosProps = {

};

const Heros: React.FC<HerosProps> = () => {

  return (
    <div className='flex flex-1/3 h-full justify-center'>
      <img src="/hero/star.webp" className=' bg-[#d8d8d8] w-20 h-20 object-cover rounded-2' alt="" />
    </div>
  )
}
export default Heros;
