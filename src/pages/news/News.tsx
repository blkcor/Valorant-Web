import React from 'react';
import Navigator from '../../components/nav/Navigator';


type NewsProps = {
  
};

const News:React.FC<NewsProps> = () => {
  return(
    <>
      <Navigator />
      <h1>news</h1>
    </>
  )
}
export default News;
