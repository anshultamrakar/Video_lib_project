import { useContext} from "react";
import DataContext from "./Context/DataContext";

const NewPlayList = () => {
    const { videoTitle , setVideoTitle, videoDescription , setVideoDescription , handlePost  } = useContext(DataContext)
  return(
        <main className="NewPlayList">
            <h3> New PlayList</h3>
           <form className = "newPostForm" onSubmit={handlePost}>
               <label htmlFor="videoTitle"> Title :</label>
                <input 
                id = "videoTitle"
                type = "text"
                placeholder="Title"
                required
                value = {videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                />
                <label htmlFor="videoBody">Description :</label>
                <textarea
                id = "videoBody"
                type = "text"
                placeholder="Description"
                required
                value = {videoDescription}
                onChange={(e) => setVideoDescription (e.target.value)}
                />
                <button type = "submit">Save</button>
           </form>
           
        </main>
  )
   
};

export default NewPlayList;
