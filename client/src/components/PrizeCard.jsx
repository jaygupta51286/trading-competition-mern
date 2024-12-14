import React from 'react';
import './Prizes.css'; // Ensure your CSS is imported here

const PrizeCard = ({ title, details }) => {
  return (
    <div className="prize-card">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: details }}></p>
    </div>
  );
};

export default PrizeCard;
