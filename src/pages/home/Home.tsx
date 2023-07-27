import React from 'react';
import Heros from '../../components/sidebar/heros/Heros';
import Skills from '../../components/sidebar/skills/Skills';
import Maps from '../../components/sidebar/maps/Maps';
import MapView from '../../components/mapView/MapView';

type HomeProps = {

};

const Home: React.FC<HomeProps> = () => {

  return (
    <div className='flex w-80% m-auto'>
      <div
        className='flex flex-1/4 flex-col items-center gap-5 p-5 bg-[#363e45] rounded-bl-[10px]'
      >
        <div className='flex flex-col gap-4 w-full box-border'>

          <div className='flex gap-5 justify-between rounded-2'>
            <Maps />
          </div>
          <div className='flex gap-1 items-center justify-center'>
            <Heros />
            <Skills />
          </div>
        </div>
      </div>
      <div
        className='flex flex-3/4 rounded-br-[10px]'>
        <MapView url='' />
      </div>

    </div>
  )
}
export default Home;
