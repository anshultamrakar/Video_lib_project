
import Video from './Video';
const Feed = ({videos}) => {
  return (
    <>
        <ul className="video-items">
        {videos.map((item) => (
           <Video key = {item.id} item={item}/>
        ))}
        </ul>
    </>
  )
  
  
};

export default Feed;
