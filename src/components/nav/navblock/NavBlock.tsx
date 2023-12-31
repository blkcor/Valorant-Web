import React from 'react';
import { Link } from 'react-router-dom';
type NavBlockProps = {
  title: string
  name: string
  actived: boolean
};

const NavBlock: React.FC<NavBlockProps> = ({ title, name, actived }) => {
  return (
    <div className={`flex flex-1/3 h-[95%] font-bold items-center justify-center min-w-5rem
    ${actived && 'border-b-solid border-b-4 box-content border-b-blue-600'}`}>
      <Link
        className={`decoration-none h-full flex items-center justify-center
        ${actived ? 'text-black' : 'text-white hover:text-black '} `}
        to={`/${name}`}>
        {title}
      </Link>
    </div>
  )
}
export default NavBlock;
