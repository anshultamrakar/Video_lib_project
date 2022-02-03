import { useContext } from "react";
import DataContext from "./Context/DataContext";
import ReactPlayer from 'react-player/youtube'


const WatchHistory = () => {
  const { watchHistoryList, setWatchHistoryList} = useContext(DataContext)
 
  return(
        <main className='watchHistory'>
        {
          watchHistoryList.map((item) => (
            <li key = {item.id}>
               <ReactPlayer light = {true}  url = {item.vidUrl}/>
            </li>
          ))
        }
        </main>
  )
};

export default WatchHistory;
