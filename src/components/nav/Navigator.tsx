import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import NavBlock from './navblock/NavBlock';
import LoginButton from './loginButton/LoginButton';
import NavMenu from './navmenu/NavMenu';
type NavigatorProps = {

};

const Navigator: React.FC<NavigatorProps> = () => {
  const actived = useLocation().pathname.split("/")[1]
  return (
    <div className='flex flex-row bg-gray-400 min-h-17 w-full gap-5 '>
      <div className='flex flex-3/8 gap-5 items-center justify-center pl-1rem'>
        <Link
          className='sm:flex text-center block flex-1/3 text-4xl text-black font-bold decoration-none items-center justify-center text-white'
          to='/'
        >VALTEC</Link>
        <div className='sm:flex hidden flex-2/3 gap-5 h-full'>
          <NavBlock title='点位教学' name='teach' actived={actived === "" || actived === "teach"} />
          <NavBlock title='上传点位' name='discuss' actived={actived === "discuss"} />
          <NavBlock title='资讯' name='news' actived={actived === "news"} />
        </div>
        <div className='sm:hidden mr-2'>
          <NavMenu />
        </div >
      </div>
      <div className='flex flex-5/8 flex-row items-center justify-end pr-1rem'>
        <LoginButton />
      </div>
    </div>
  )
}
export default Navigator;
