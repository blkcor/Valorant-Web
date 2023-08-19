import React, { useState } from 'react';
import "./textImage.css"

type TextImageProps = {
  img: string,
  text: string,
  // setIndex: React.Dispatch<React.SetStateAction<number>>
};


const TextImage: React.FC<TextImageProps> = ({ img, text }) => {
  const [showMapList, setShowMapList] = useState<boolean>(false)

  return (
    <div className='text-center flex flex-col items-center justify-center transition-all w-full'>
      <div className='imageContainer'>
        <img src={img} alt="" className='w-full relative object-cover  hover:cursor-pointer ' onClick={() => setShowMapList(prev => !prev)} />
        <span className='relative z-100 fw-700 text-10'>{text}</span>
      </div>
    </div >
  )
}
export default TextImage;
