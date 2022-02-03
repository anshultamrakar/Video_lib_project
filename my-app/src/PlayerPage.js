import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { AiFillLike} from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAddCheck } from "react-icons/md"
import { useContext, useEffect } from 'react';
import DataContext from './Context/DataContext';
import NewPlayList from './NewPlayList';





const PlayerPage = () => {
  const {videos, handleLikeList, handleWatchLater , watchHistoryList} = useContext(DataContext)
  const {id} = useParams();
  const item = videos.find(item => (item.id).toString() === id)

  useEffect(() => {
      watchHistoryList.push(item);
  },[]);


  return(
    <main className='playerPage'>
      <article>
        {
          item && 
          <>
          <ReactPlayer url = {item.vidUrl}/>
          <section className='playerBtn'>
          <button className='btns' onClick={() => handleLikeList(item)}><AiFillLike/></button>
          <button className='btns'><MdPlaylistAddCheck/></button>
          <button className='btns' onClick={() => handleWatchLater(item)}><MdOutlineWatchLater/></button>
          </section>
          </>
        }
      </article>
      <div>
       <NewPlayList/>
      </div>
    </main>
  )

};

export default PlayerPage;
