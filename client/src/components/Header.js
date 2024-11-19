import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu when navigating
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => handleNav('/')}>
        <span className="futu">Futu</span>
        <span className="re">re</span>
        <span className="skill-lab"> Skill Lab</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`header-buttons ${menuOpen ? 'open' : ''}`}>
        <button className="header-btn" onClick={() => handleNav('/')}>Home</button>
        <button className="header-btn" onClick={() => handleNav('/how-to-join')}>How to Join</button>
        <button className="header-btn" onClick={() => handleNav('/competition-details')}>Competition Details</button>
        <button className="header-btn" onClick={() => handleNav('/why-join')}>Why Join</button>
        <button className="header-btn" onClick={() => handleNav('/conditions')}>Conditions</button>
        <button className="header-btn" onClick={() => handleNav('/leaderboard')}>Leaderboard</button>
      </nav>
    </header>
  );
};

export default Header;
