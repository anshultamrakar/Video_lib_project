import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'

const Video = ({item}) => {
  return(
    <article className='videoList'>
        <li>
        <Link to = {`video/${item.id}`} > 
        
            <div className='player-wrapper'>
            <ReactPlayer className = "react-player" width="100%"
              height="100%" light = {true} url= {item.vidUrl}/>
            </div>
           <h3>{item.title}</h3>
           </Link>
           <p> {item.channel}</p>
           <p> {item.views} views</p>
        </li>
    </article>
  ) 

};

export default Video;
