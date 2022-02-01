import Layout from './Layout';
import Home from './Home';
import PlayerPage from './PlayerPage';
import Missing from './Missing';
import WatchHistory from './WatchHistory';
import WatchLater from './WatchLater';
import LikedVideo from './LikedVideo';
import PlayList from './PlayList';
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {

  const [videos, setVideos] = useState([
    {
        id : 1,
        vidUrl : "https://www.youtube.com/watch?v=k2Zk5cbiZhg",
        title : " Radha Full Video",
        channel : "Sandeep Maheshwari",
        views : 118
    },
    {
        id : 2,
        vidUrl : "https://www.youtube.com/watch?v=aZGzwEjZrXc",
        title : " Moh Moh k Dhaage",
        channel : "T series ",
        views : 108
    },
    {
        id : 3,
        vidUrl : "https://www.youtube.com/watch?v=D70R-k5PxLY",
        title : "Chalte Chalte",
        channel : "Bhuvan Bam ",
        views : 458
    },
    {
        id : 4,
        vidUrl : "https://www.youtube.com/watch?v=D70R-k5PxLY",
        title : "Sistes wedding ",
        channel : "Kapil Sharma",
        views : 78
    },
    {
        id : 5,
        vidUrl : "https://www.youtube.com/watch?v=aZGzwEjZrXc",
        title : " Moh Moh k Dhaage",
        channel : "T series ",
        views : 108
    },
    {
        id : 6,
        vidUrl : "https://www.youtube.com/watch?v=D70R-k5PxLY",
        title : "Chalte Chalte",
        channel : "Bhuvan Bam ",
        views : 458
    },
    {
        id : 7,
        vidUrl : "https://www.youtube.com/watch?v=D70R-k5PxLY",
        title : "Sistes wedding ",
        channel : "Kapil Sharma",
        views : 78
    },
    {
        id : 5,
        vidUrl : "https://www.youtube.com/watch?v=aZGzwEjZrXc",
        title : " Moh Moh k Dhaage",
        channel : "T series ",
        views : 108
    },
    {
        id : 6,
        vidUrl : "https://www.youtube.com/watch?v=D70R-k5PxLY",
        title : "Chalte Chalte",
        channel : "Bhuvan Bam ",
        views : 458
    },
    {
        id : 7,
        vidUrl : "https://www.youtube.com/watch?v=D70R-k5PxLY",
        title : "Sistes wedding ",
        channel : "Kapil Sharma",
        views : 78
    },
])

const [likedList , setLikedList] = useState([])
const [watchedLater , setaWatchedLater] = useState([]);
const [videoTitle , setVideoTitle] = useState('');
const [videoBody , setVideoBody] = useState('')
const [playList , setPlayList ] = useState([])




 const handlePost = (e) => {
  e.preventDefault();
  const id = playList.length ? videos[videos.length - 1].id + 1 : 1;
  const newVideo = {id , title : videoTitle , body : videoBody}
  const allVideo = [...playList, newVideo]
  setPlayList(allVideo)
  setVideoTitle('')
  setVideoBody('')
}




const handleLikeList = (item) => {
  setLikedList([...likedList , item])
}

const handleWatchLater = (item) => {
  setaWatchedLater([...watchedLater , item])
}


const removeVideo = (id) => {
 const removedVideo = likedList.filter((item) => item.id !== id);
 setLikedList(removedVideo)
}

const removeLater = (id) => {
  const removedLater = watchedLater.filter((item) => item.id !== id)
  setaWatchedLater(removedLater)
}

  return (
    <div className='App'>
      <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element = {<Home videos = {videos}/>} />
        <Route path = "video">
        <Route index element = {<WatchHistory />}/>
        <Route path = ":id" element = {<PlayerPage videos={videos} handleLikeList = {handleLikeList}  handleWatchLater={handleWatchLater}
        videoTitle = {videoTitle} setVideoTitle = {setVideoTitle} videoBody = {videoBody} setVideoBody = {setVideoBody} 
        handlePost = {handlePost}
        />}/>
        </Route>
        <Route path = "later" element = {<WatchLater watchedLater = {watchedLater} removeLater = {removeLater}/>}/>
        <Route path = "playlist" element = {<PlayList playList = {playList}/>}/>
        <Route path = "liked" element = {<LikedVideo likedList={likedList} removeVideo = {removeVideo} />}/>
        <Route path = "*" element = {<Missing/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;


