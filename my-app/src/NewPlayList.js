const NewPlayList = ({videoTitle , setVideoTitle , videoBody , setVideoBody , handlePost}) => {
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
                value = {videoBody}
                onChange={(e) => setVideoBody(e.target.value)}
                />
                <button type = "submit"> Post</button>
           </form>
           
        </main>
  )
   
};

export default NewPlayList;
