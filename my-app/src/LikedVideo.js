import ReactPlayer from 'react-player/youtube'
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const LikedVideo = () => {

  const {likedList, removeVideo } = useContext(DataContext)

  return (
    <main className='likedVideo'>
      {
         likedList.map((item) => (
          <li key = {item.id}>
            <div className='float-btn'>
            <button  className='cross-btn ' onClick={() => removeVideo(item.id)}> x </button>
            </div>
            <div className='player-wrapper'>
            <ReactPlayer className = "react-player" width="100%"
              height="100%" light = {true} url= {item.vidUrl}/>
            </div>
            <h2>{item.title}</h2>
            <p>{item.channel}</p>
            <p>{item.views} views</p>
          </li>
        ))
      }
 
    </main>
  )
};

export default LikedVideo;
