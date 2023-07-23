import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import NavBlock from './navblock/NavBlock';
import LoginButton from './loginButton/LoginButton';
type NavigatorProps = {

};

const Navigator: React.FC<NavigatorProps> = () => {
  const actived = useLocation().pathname.split("/")[1]
  return (
    <div className='flex flex-row bg-white min-h-17 w-full gap-5 '>
      <div className='flex flex-3/8 gap-5 items-center justify-center pl-1rem'>
        <Link
          className='sm:flex flex-1/3 text-4xl text-black font-bold decoration-none items-center justify-center'
          to='/'
        >VALTEC</Link>
        <div className='sm:flex hidden flex-2/3 gap-5 h-full'>
          <NavBlock title='点位教学' name='teach' actived={actived === "" || actived==="teach"}/>
          <NavBlock title='上传点位' name='discuss' actived={actived==="discuss"}/>
          <NavBlock title='资讯' name='news' actived={actived==="news"}/>
        </div>
      </div>
      <div className='sm:flex flex-5/8 flex-row items-center justify-end pr-1rem'>
          <LoginButton/>
      </div>
    </div>
  )
}
export default Navigator;