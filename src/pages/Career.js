import './Career.css';
import React from 'react';
import Team from '../components/team.js';
import EmailTemplate from '../components/EmailComponent.js';


function Career() {
  return (
    <>
     
      <div className='career'>
      <Team />
          <EmailTemplate />
      </div>
      
    </>
    
  );
}

export default Career;