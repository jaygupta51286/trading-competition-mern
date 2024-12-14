// src/components/ParticipateButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ParticipateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step-one');
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
        onClick={handleClick}
      >
        Participate Now
      </button>
    </div>
  );
}

export default ParticipateButton;
