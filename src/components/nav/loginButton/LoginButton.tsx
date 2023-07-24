import React from 'react';

type LoginButtonProps = {
  
};

const LoginButton:React.FC<LoginButtonProps> = () => {
  
  return(
    <button
      className='
      w-20 p-2 bg-blue-400 text-white border-none 
      border-rounded-1 font-400 text-sm
      hover:cursor-pointer hover:bg-blue-500 
      '
    >
      QQ登录
    </button>
  )
}
export default LoginButton;
