import React from "react";
import "./our-projects.css";


const OurProjects = () => {
  return (
    <section id="our-projects" className="our-projects-section">
      <h2 className="section-title">Our Projects</h2>

      <div className="project-types">
        
        <div className="gallery-pro">
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/images/our-projects.jpg'} alt="Residential Projects" />
            <h4>Residential</h4>
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/images/our-projects.jpg'} alt="Commercial Projects" />
            <h4>Commercial</h4>
          </div>
          <div className="gallery-item">
            <img src={process.env.PUBLIC_URL + '/images/our-projects.jpg'} alt="Rental Income Projects" />
            <h4>Rental Income</h4>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default OurProjects;
