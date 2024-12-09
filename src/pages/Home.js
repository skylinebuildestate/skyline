import './Home.css';
import React from 'react';

import Gallery from '../components/Gallery.js';
import RealEstateCounters from '../components/counter.js';
import HomePageIntro from '../components/intro.js';
import OurProjects from '../components/our-projects.js';
function Home() {
  return (
    <>
 
    <HomePageIntro />
    <RealEstateCounters />
    <Gallery />

    

    

   

    </>
    
  );
}

export default Home;
