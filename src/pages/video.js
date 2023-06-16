import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/video-footer";
import VideoSidebar from "./components/sidebar/videoSidebar";

function Video({likes, messages, shares, name, description, music, url}) {

  const VideoRef = useRef(null);
  const [play, setPlay] = useState(false)

  function handleStart() {
    if (play) {
      VideoRef.current.pause()
      setPlay(false) 
    }
    else {
      VideoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        src={url}
        loop
        ref={VideoRef}
        onClick={handleStart}
      ></video>
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Video;
