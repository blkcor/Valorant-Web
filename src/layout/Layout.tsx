import React from 'react';
import Navigator from '../components/nav/Navigator';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
type layoutProps = {

};

const Layout: React.FC<layoutProps> = () => {

  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout;
