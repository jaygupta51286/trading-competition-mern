// src/components/GetStarted.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step-one');
  };

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Participate</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Now</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
