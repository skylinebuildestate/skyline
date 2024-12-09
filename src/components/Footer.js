// Footer.js

import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import photo from './Footer.jpg'; // Import your photo from the components folder

const Footer = () => {



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        
        try {
          const response = await fetch('https://script.google.com/macros/s/AKfycbzpqKbwEkExzdwdzQ8CsHAdML1sQjRLwUAN_-YT90hE_B-WFczIi3ejnq_VMHkcjAGP/exec', {
            method: 'POST',
            body: formData
          });
          
          if (response.ok) {
            alert('Form submitted successfully!');
            form.reset();
          } else {
            throw new Error('Form submission failed!');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong. Please try again later.');
        }
      };

    return (
    <footer className="footer">
 
        <div className="back-photo" style={{ backgroundImage: `url(${photo})` }}></div>
           
        <div className="box-container">

              <div className="box">
                <a href='https://maps.app.goo.gl/Pnhj6w666pCjgzYJ8'><i className="fas fa-map-marker-alt"></i></a>
                <h1>ADDRESS</h1>
                <a href='https://maps.app.goo.gl/Pnhj6w666pCjgzYJ8'><p> 69/7 New Sanganer Road, Near Dhanvantari Hospital, Mansarovar, Jaipur, Rajasthan 302015, IN </p> 
                </a>
              </div>

              <div className="box">
                <a href = 'mailto:skylinebuildestatespvt@gmail.com'><i className="fas fa-envelope"></i></a>
                <h1>EMAIL</h1>
                <a href = 'mailto:skylinebuildestatespvt@gmail.com'><p>skylinebuildestatespvt@gmail.com</p></a>
              </div>
        
              <div className="box">
                <a href = 'tel:+9172406 77677'><i className="fas fa-phone"></i></a>
                <h1>CONTACT NO.</h1>
                <a href = 'tel:+9172406 77677'><p>+91 72406 77677</p></a>
              </div>

              <div className="box">

                <h1>FOLLOW US</h1>
                <a className='soc-icon' href = "https://www.facebook.com/profile.php?id=61557195751282"><i className="fab fa-facebook soc-icon"></i></a>
                <a className='soc-icon' href = "https://www.instagram.com/skylinebuildestates/"><i className="fab fa-instagram soc-icon"></i></a>
                <a className='soc-icon' href = "https://www.linkedin.com/company/skyline-buildestates-pvt-ltd/"><i className="fab fa-linkedin soc-icon"></i></a>
              </div>

        </div>

        
        <div className='footer-bottom'>

        
            <div className='contact-us-form'>
            <h2>Contact Us</h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                    
                    <input type="text" id="name" name="name" placeholder='Name'required />
 
                    <input type="phone" id="phone" name="phone" placeholder='phone no.' required />

                    <input type="email" id="email" name="email" placeholder='email' required />

                    <select id="message" name="message" required>
                      <option value = " ">What are you looking for?</option>
                      <option value ="SkylineFresco"> Skyline Fresco </option>

                    </select>

                    <button type="submit">SUBMIT</button>
                </form>

            </div>
            <div className='map'>
                <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.461403017873!2d75.75572507502179!3d26.857077976680408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5001830f841%3A0xd4ded6c423cfc99a!2sSkyline%20Buildestates%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1733729860358!5m2!1sen!2sin" >
                allowFullScreen
            </iframe>
            </div>

        </div>
    </footer>
  );
}

export default Footer;
