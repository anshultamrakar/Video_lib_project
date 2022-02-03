import { useContext } from "react";
import DataContext from "./Context/DataContext";
const PlayList = () => {
const {playList,setPlayList} = useContext(DataContext)
  return (
    <main className="playList">
   {
    playList.map((item) => (
      <li key = {item.id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
       
      </li>
    ))
   }
    </main> 
  )
 
};

export default PlayList;
