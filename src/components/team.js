import './team.css';
import React from 'react';



function Team() {

    
        // Sample project data (replace with your actual data)
    const team_members = [
          { id: 1, name: 'Hemant Bansal', position:"Managing Director",  imageUrl: require('./team/hemant_bansal.png') },

          // Add more projects as needed
        ];

    return (
        <>

        <div className='team-container'>

            <h1>OUR TEAM</h1>

            
            <div className='cards'>
                {team_members.map(team_members => (
                        <div className="team-members">
                            <img src={team_members.imageUrl} alt={team_members.name}></img>
                            <div className='member-desc'>
                                <h3>{team_members.name}</h3>
                                <p>{team_members.position}</p>
                                <div className='member-socials'>                
                                    <a className='soc-icon' href = "https://www.facebook.com/hemant.bansal.509"><i className="fab fa-facebook soc-icon"></i></a>
                                    <a className='soc-icon' href = "https://www.linkedin.com/in/hemant-bansal-6b83688/"><i className="fab fa-linkedin soc-icon"></i></a>
                                </div>
                                <h5> "My vision is to build the best skyline of India in Jaipur" </h5>
                            </div>
                        </div>
                ))}

            </div>
            



        </div>


      

    
    
        </>
        
    );
}

export default Team;
