import {useState} from 'react'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const FeedVideos = () => {

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
    ])
  return (
    <main className='wrapper' >
      <ul>
          {
              videos.map((item) => (
                  <li key = {item.id}>
                      <div>
                      <ReactPlayer url= {item.vidUrl}
                      />
                      </div>
                   <h3>{item.title}</h3>
                   <p> {item.channel}</p>
                   <p> {item.views} views</p>
                  </li>
              ))
          }
      </ul>
    </main>
  )
 ;
};

export default FeedVideos;
