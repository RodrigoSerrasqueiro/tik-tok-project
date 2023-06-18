import React, { useEffect, useState } from "react"
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [videos, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App">
      <div className="app__videos">

        { videos.map((videos, index) => {
          return (
            <Video 
              likes={videos.likes}
              messages={videos.messages}
              shares={videos.shares}
              name={videos.name}
              description={videos.description}
              music={videos.music}
              url={videos.url}
              key={index}
            />
          )
        }) }
        
      </div>
    </div>
  );
}

export default App;
