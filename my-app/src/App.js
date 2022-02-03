import Layout from './Layout';
import Home from './Home';
import PlayerPage from './PlayerPage';
import Missing from './Missing';
import WatchHistory from './WatchHistory';
import WatchLater from './WatchLater';
import LikedVideo from './LikedVideo';
import PlayList from './PlayList';
import {Route, Routes} from 'react-router-dom'
import { DataProvider } from './Context/DataContext';


function App() {

  return (
    <div className='App'>
      <DataProvider>
      <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element = {<Home/>} />
        <Route path = "video">
        <Route index element = {<WatchHistory/>}/>
        <Route path = ":id" element = {<PlayerPage/>}/>
        </Route>
        <Route path = "later" element = {<WatchLater/>}/>
        <Route path = "playlist" element = {<PlayList/>}/>
        <Route path = "liked" element = {<LikedVideo />}/>
        <Route path = "*" element = {<Missing/>}/>
      </Route>
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;


