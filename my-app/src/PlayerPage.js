import {Link, useParams} from 'react-router-dom'
import NewPlayList from './NewPlayList';
import ReactPlayer from 'react-player/youtube'
import { AiFillLike} from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAddCheck } from "react-icons/md"


const PlayerPage = ({videos, handleLikeList, handleWatchLater, videoTitle , setVideoTitle , videoBody , setVideoBody , handlePost}) => {

  const {id} = useParams();
  const item = videos.find(item => (item.id).toString() === id)

 
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
        <NewPlayList videoTitle = {videoTitle} setVideoTitle = {setVideoTitle} videoBody = {videoBody} setVideoBody = {setVideoBody} 
        handlePost = {handlePost}/>
      </div>


   
    </main>
  )

};

export default PlayerPage;
