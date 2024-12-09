// Gallery.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Gallery.css'; // Import your CSS file for styling
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles


const Gallery = () => {

  // Sample project data (replace with your actual data)
  const projects = [
    { id: 1, name: 'Skyline Fresco', type: 'Studio Apt.', imageUrl: require('./Gallery/skylineFresco.jpg') },
    { id: 1, name: 'Skyline Fresco', type: 'Infinity Pool', imageUrl: require('./Gallery/skylineFresco2.jpg') },
    { id: 1, name: 'Skyline Fresco', type: '1BHK', imageUrl: require('./Gallery/skylineFresco3.jpg') }
    // Add more projects as needed
  ];

  return (
    <>
    <div className='gallery'>
        
        <div className='gallery-heading'>
           
            <img src={process.env.PUBLIC_URL + '/images/fresco-logo.png'}/>

        </div>

        <div className="gallery-container">
          <Carousel
              autoPlay
              infiniteLoop
              showArrows = {false}
              showStatus={false}
              showThumbs={false}
              interval={2300} // Auto-slide interval in milliseconds (5 seconds)
              axis="horizontal"
          >
            {projects.map(project => (
            <div key={project.id} className="slide-item">
                <img src={project.imageUrl} alt={project.name} />
                <div className="slide-overlay">
                <h3>{project.name}</h3>
                <p>{project.type}</p>
                </div>
            </div>
            ))}
        </Carousel>
        </div>

    </div>
    
    </>
  );
}

export default Gallery;
