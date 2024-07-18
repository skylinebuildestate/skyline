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
                <a href='https://maps.app.goo.gl/1LUcR7bJgG37KmWd8'><i className="fas fa-map-marker-alt"></i></a>
                <h1>ADDRESS</h1>
                <p> Sanganer Rd.</p>
              </div>

              <div className="box">
                <a href = 'mailto:skylinebuildestatespvt@gmail.com'><i className="fas fa-envelope"></i></a>
                <h1>EMAIL</h1>
                <a href = 'mailto:skylinebuildestatespvt@gmail.com'><p>skylinebuildestatespvt@gmail.com</p></a>
              </div>
        
              <div className="box">
                <a href = 'tel:+919784581277'><i className="fas fa-phone"></i></a>
                <h1>CONTACT NO.</h1>
                <a href = 'tel:+919784581277'><p>+91 9784581277</p></a>
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

                    <textarea id="message" name="message" placeholder='what are you looking for?' rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>

            </div>
            <div className='map'>
                <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5448697335087!2d75.6912666758129!3d26.854424662592436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b24812edb99%3A0xc119300dcf9655a6!2sSkyline%20Fresco!5e0!3m2!1sen!2sin!4v1720858001594!5m2!1sen!2sin" 
                allowFullScreen
            ></iframe>
            </div>

        </div>
    </footer>
  );
}

export default Footer;
