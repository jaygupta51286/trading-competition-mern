import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ParticipateButton.css';

const ParticipateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step-one');
  };

  return (
    <div className="participate-button-container">
      <button className="participate-btn" onClick={handleClick}>Participate Now</button>
    </div>
  );
}

export default ParticipateButton;
