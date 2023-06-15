import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/video-footer";

function Video() {

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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        loop
        ref={VideoRef}
        onClick={handleStart}
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
