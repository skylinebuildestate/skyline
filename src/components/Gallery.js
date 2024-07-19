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
            <h1>Skyline Buildestates</h1>
            <p> We have building the skyline of Jaipur since 2009. At Skyline Buildestates, we take pride in ourselves on delivering exceptional construction and 
            real estate development services. Our team of dedicated professionals works tirelessly to 
            create innovative and sustainable spaces that not only meet but exceed our clients' expectations.
             With a commitment to quality, transparency, and customer satisfaction, we transform visions into 
             reality, crafting residential and commercial properties that stand the test of time. 
             Explore our portfolio to see the skyline of possibilities we can build together.</p>
        </div>

        <div className="gallery-container">
        <Carousel
            autoPlay
            infiniteLoop
            showArrows = {false}
            showStatus={false}
            showThumbs={false}
            interval={2500} // Auto-slide interval in milliseconds (5 seconds)
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
