import React from "react";
import "./intro.css";



const HomePageIntro = () => {
  return (
    <div className="home-page-intro">
      <div className="video-section">
        <video className="intro-video" controls autoPlay loop>
          <source src={process.env.PUBLIC_URL + '/images/trailer.mp4'} type="video/mp4" />
        </video>
      </div>
      <div className="text-section">
        
        <div className="introduction">
         
          <div className="logo-intro">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Company Logo" />
        </div>
          <p>
            We have been building the skyline of Jaipur since 2009. At Skyline Buildestates, 
            we take pride in ourselves on delivering exceptional construction and 
            real estate development services. Our team of dedicated professionals works tirelessly to 
            create innovative and sustainable spaces that not only meet but exceed our clients' expectations.
            With a commitment to quality, transparency, and customer satisfaction, we transform visions into 
            reality, crafting residential and commercial properties that stand the test of time. 
            Explore our portfolio to see the skyline of possibilities we can build together.
          </p>
        
        <div className="btn-container">
            <button className="intro-btn" onClick={() => document.getElementById('our-projects').scrollIntoView({ behavior: 'smooth' })} >
                EXPLORE
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntro;
