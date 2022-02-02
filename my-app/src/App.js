import Layout from './Layout';
import Home from './Home';
import PlayerPage from './PlayerPage';
import Missing from './Missing';
import WatchHistory from './WatchHistory';
import WatchLater from './WatchLater';
import LikedVideo from './LikedVideo';
import PlayList from './PlayList';
import {Route, Routes} from 'react-router-dom'
import {useState, useEffect } from 'react'

function App() {

  const [videos, setVideos] = useState([
    {
        id : 1,
        vidUrl : "https://www.youtube.com/watch?v=JmvvzpzGCWE",
        title : "Life Is A Dream",
        channel : "Actualized.org",
        views : 118
    },
    {
        id : 2,
        vidUrl : "https://www.youtube.com/watch?v=G5ZYV-IMIUU",
        title : " Overcoming Addiction ",
        channel : "Actualized.org",
        views : 108
    },
    {
        id : 3,
        vidUrl : "https://www.youtube.com/watch?v=e4yipKfO8nA",
        title : "Meditation Techniques",
        channel : "Actualized.org",
        views : 458
    },
    {
        id : 4,
        vidUrl : "https://www.youtube.com/watch?v=WeIfHozjcls",
        title : "Life Is A Maze",
        channel : "Actualized.org",
        views : 78
    },
    {
        id : 5,
        vidUrl : "https://www.youtube.com/watch?v=sRvQlgu_bRs",
        title : "How Corruption Works",
        channel : "Actualized.org",
        views : 108
    },
    {
        id : 6,
        vidUrl : "https://www.youtube.com/watch?v=BZFlE0eKTvw",
        title : "Spiral Dynamics - Stage Purple",
        channel : "Actualized.org",
        views : 458
    },
    {
        id : 7,
        vidUrl : "https://www.youtube.com/watch?v=Y9d0tOpL8ZU",
        title : "Explicit vs Implicit ",
        channel : "Actualized.org",
        views : 78
    },
    {
        id : 8,
        vidUrl : "https://www.youtube.com/watch?v=jmBQRb5iuMg",
        title : "What Is Reality?",
        channel : "Actualized.org",
        views : 108
    },
    {
        id : 9,
        vidUrl : "https://www.youtube.com/watch?v=F4HV6oKJgiE",
        title : "What Is Actuality?",
        channel : "Actualized.org",
        views : 458
    },
    {
        id : 10,
        vidUrl : "https://www.youtube.com/watch?v=hxnV4ymozLw&t=3s",
        title : "The Avoidance Of Truth",
        channel : "Actualized.org",
        views : 78
    },
    {
      id : 11,
      vidUrl : "https://www.youtube.com/watch?v=7LscnZCzdak",
      title : "Guided Meditation",
      channel : "Actualized.org",
      views : 78
  }
])

const [search , setSearch] = useState('')
const [searchResult, setSearchResult ] = useState([])
const [likedList , setLikedList] = useState([])
const [watchedLater , setaWatchedLater] = useState([]);


useEffect(()=> {
  const filterResults = videos.filter((video) => (video.title).toLowerCase().includes(search.toLowerCase()))
  setSearchResult(filterResults)
},[videos, search])



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
      <Route path = "/" element = {<Layout search = {search} setSearch = {setSearch}/>}>
        <Route index element = {<Home videos = {searchResult}/>} />
        <Route path = "video">
        <Route index element = {<WatchHistory />}/>
        <Route path = ":id" element = {<PlayerPage videos={videos} handleLikeList = {handleLikeList}  handleWatchLater={handleWatchLater}
        />}/>
        </Route>
        <Route path = "later" element = {<WatchLater watchedLater = {watchedLater} removeLater = {removeLater}/>}/>
        <Route path = "playlist" element = {<PlayList/>}/>
        <Route path = "liked" element = {<LikedVideo likedList={likedList} removeVideo = {removeVideo} />}/>
        <Route path = "*" element = {<Missing/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;


