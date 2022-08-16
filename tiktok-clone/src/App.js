import axios from './axios.js';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {  

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost()  {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);
    }

    fetchPost();
  }, []);
  console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (video) => (
          <Video
            url= {video.url}
            channel= {video.channel}
            song= {video.song}
            likes= {0}
            messages= {video.messages}
            description= {video.description}
            shares= {video.shares}
           />
        ))
        }
    </div>
    </div>
  );
}

export default App;
