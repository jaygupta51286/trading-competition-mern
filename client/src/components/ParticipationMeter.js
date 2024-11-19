import React from 'react';
import './ParticipationMeter.css';

const ParticipationMeter = ({ value, maxValue }) => {
  return (
    <div className="meter">
      <div className="meter-fill" style={{ width: `${(value / maxValue) * 100}%` }}></div>
    </div>
  );
}

export default ParticipationMeter;
