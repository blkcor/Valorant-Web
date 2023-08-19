import React, { useEffect, useState } from 'react';
import Heros from '../../components/sidebar/heros/Heros';
import Skills from '../../components/sidebar/skills/Skills';
import Maps from '../../components/sidebar/maps/Maps';
import MapView from '../../components/mapView/MapView';
import axios from 'axios'
type HomeProps = {

};

interface Map {
  name: string,
  url: string,
  avatar: string
}

interface Hero {
  name: string,
  avatar: string,
  c: string,
  q: string,
  e: string,
  x: string
}

interface Position {
  sx: string,
  sy: string,
  px: string,
  py: string
}

const Home: React.FC<HomeProps> = () => {
  const [maps, setMaps] = useState<Map[]>([])
  const [index, setIndex] = useState<number>(0)
  const [heros, setHeros] = useState<Hero[]>([])
  const [position, setPosition] = useState<Position>()

  //TODO:地图资源
  const coverUrl = "url/maps"
  //TODO:人物资源
  const heroUrl = "url/heros"
  //TODO:点位资源
  const positionUrl = "url/positions?mid=1&hid=1&skill=c"
  useEffect(() => {
    const fetchData = async () => {
      //地图资源
      const mapResource = await axios.post(coverUrl)
      //人物资源
      const heroResource = await axios.post(heroUrl)
      //点位资源
      const positionResource = await axios.post(positionUrl)
      setMaps(mapResource.data)
      setHeros(heroResource.data)
      setPosition(positionResource.data)
    }
    fetchData()


  }, [])

  return (
    <div className='flex w-80% m-auto'>
      <div
        className='flex flex-1/4 flex-col items-center gap-5 p-5 bg-[#363e45] rounded-bl-[10px]'
      >
        <div className='flex flex-col gap-4 w-full box-border'>

          <div className='flex gap-5 justify-between rounded-2'>
            <Maps cover={maps[0].avatar} text={maps[0].name} />
          </div>
          <div className='flex gap-1 items-center justify-center'>
            <Heros name={heros[0].name} avatar={heros[0].avatar} />
            <Skills c={heros[0].c} q={heros[0].q} e={heros[0].e} x={heros[0].x} />
          </div>
        </div>
      </div>
      <div
        className='flex flex-3/4 rounded-br-[10px]'>
        <MapView url={maps[0].url} position={position!} />
      </div>

    </div>
  )
}
export default Home;
