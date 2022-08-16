import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'



function Video({url, channel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = ()=> {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        }else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
  return (
    <div className='video'>
        <video
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref={videoRef}
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-model-girl-posing-on-a-white-background-34428-large.mp4" type="video/mp4" />
        </video>

        {/* Video Footer */}
        <VideoFooter 
        channel={channel}
        description={description}
        song={song}/>

        {/* Video sidebar */}
        <VideoSidebar  likes= {likes} shares={shares} messages={messages} />
    </div>
  )
}

export default Video