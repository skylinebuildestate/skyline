import './Home.css';
import React from 'react';
import ReactPlayer from 'react-player';
import homeVideo from './homeVedio.mp4';
import Gallery from '../components/Gallery.js';
import Team from '../components/team.js';

function Home() {
  return (
    <>
    <div className="homeVideo">
          <ReactPlayer
          url={homeVideo} 
          width="100%"
          height="100%"  
          loop
          playing
          />
    </div>

    <Gallery />

    <Team />

    </>
    
  );
}

export default Home;
