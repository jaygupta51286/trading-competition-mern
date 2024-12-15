import React from 'react';
import './Footer.css';
import youtubeLogo from './youtube.png'; // Ensure you have the logos in the assets folder
import facebookLogo from './facebook.png';
import instagramLogo from './instagram.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeLogo} alt="YouTube" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
        </div>
        <div className="contact-details">
          <p>Contact: info@futureskilllab.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Future Skill Lab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
