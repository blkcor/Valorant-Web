import React from 'react';

type HerosProps = {
  name: string,
  avatar: string
};

const Heros: React.FC<HerosProps> = ({ name, avatar }) => {

  return (
    <div className='flex flex-1/3 h-full justify-center'>
      <img src={avatar} className=' bg-[#d8d8d8] w-20 h-20 object-cover rounded-2' alt={name} />
    </div>
  )
}
export default Heros;
