import React, { useEffect } from 'react';
import Navigator from '../../components/nav/Navigator';
import { useLocation } from 'react-router-dom';

type DiscussProps = {
  
};

const Discuss:React.FC<DiscussProps> = () => {
  return (
  <>
    <Navigator />
    <h1>
      discuss
    </h1>
  </>
  )
}
export default Discuss;
