import Layout from './Layout';
import Home from './Home';
import PlayerPage from './PlayerPage';
import Missing from './Missing';
import WatchHistory from './WatchHistory';
import WatchLater from './WatchLater';
import LikedVideo from './LikedVideo';
import PlayList from './PlayList';
import Register from './Register';
import Login from './Login';
import {Route, Routes} from 'react-router-dom'
import { DataProvider } from './Context/DataContext';
import { ToastContainer} from 'react-toastify';


function App() {

  return (
    <div className='App'>
      <DataProvider>
      <ToastContainer />
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
        <Route path = "register" element = {<Register/>}/>
        <Route path = "login" element = {<Login/>}/>
      </Route>
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;


