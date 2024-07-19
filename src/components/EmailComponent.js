import React from 'react';
import './EmailComponent.css';

const EmailTemplate = () => {
    const recipientEmail = "skylinebuildestatespvt@gmail.com";
    const subject = "Apply for job at Skyline Buildestates";
    const body = `Name : \n Contact no. : \n Job title (optional) : \n Qualifications : \n Message : \n (Attach your resume)` ;
    

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className='career-mail'>       
            <div className='mail-us'>
                <h2>Want to join us?</h2>
                <p>Drop us a mail with your details and resume. (Do not change the subject in the mail)</p>
                
                <a href={mailtoLink}>
                    <button className='mail-us-btn'>APPLY</button>
                </a>
                
            </div>
        </div>
  );
};

export default EmailTemplate;