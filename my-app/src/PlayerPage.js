import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { AiFillLike} from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAddCheck } from "react-icons/md"


const PlayerPage = ({videos, handleLikeList, handleWatchLater}) => {

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
    </main>
  )

};

export default PlayerPage;
