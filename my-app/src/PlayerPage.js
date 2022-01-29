import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'

const PlayerPage = ({videos, handleLikeList}) => {

  const {id} = useParams();
  const item = videos.find(item => (item.id).toString() === id)
 



  return(
    <main className='playerPage'>
      <article>
        {
          item && 
          <>
          <ReactPlayer url = {item.vidUrl}/>
          <section>
          <button onClick={() => handleLikeList(item)}>Like</button>
          <button>later</button>
          <button>PlayList</button>
          </section>
          
          </>
        }
     
      </article>
   
    </main>
  )

};

export default PlayerPage;
