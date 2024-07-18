// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">HOME</Link></li>
          <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a >OUR PROJECTS</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item"><a href="https://drive.google.com/file/d/1CVuETCcF7lLnj5c0IS9FMavC3ru2zwix/view?usp=sharing">SKYLINE FRESCO</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item"><Link to="/career">CAREER</Link></li>
        </ul>
      </nav>
      <a href = 'tel:+919784581277'><button className="call-us-btn">CALL US</button></a>
    </header>
  );
};

export default Header;
