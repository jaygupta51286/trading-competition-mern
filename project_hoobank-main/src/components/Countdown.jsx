// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure Tailwind CSS is imported

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const targetDate = new Date("2024-12-30T23:59:59").getTime(); // Adjust to the end of November 30th
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? '0' + days : days,
          hours: hours < 10 ? '0' + hours : hours,
          minutes: minutes < 10 ? '0' + minutes : minutes,
          seconds: seconds < 10 ? '0' + seconds : seconds
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="countdown bg-gradient-to-br from-black to-gray-900 p-5 rounded-lg shadow-lg bg-opacity-50">
      <div className="trading-title text-2xl mb-5 text-center w-full font-bold">Trading Challenge: Double Win Opportunity!</div>
      <div className="time-container flex flex-wrap justify-center">
        <div className="time-box bg-purple-900 p-4 m-2 rounded-md w-20 h-20 text-lg text-center text-white">
          {timeLeft.days}
          <span className="block text-sm text-gray-300">Days</span>
        </div>
        <div className="time-box bg-purple-900 p-4 m-2 rounded-md w-20 h-20 text-lg text-center text-white">
          {timeLeft.hours}
          <span className="block text-sm text-gray-300">Hours</span>
        </div>
        <div className="time-box bg-purple-900 p-4 m-2 rounded-md w-20 h-20 text-lg text-center text-white">
          {timeLeft.minutes}
          <span className="block text-sm text-gray-300">Minutes</span>
        </div>
        <div className="time-box bg-purple-900 p-4 m-2 rounded-md w-20 h-20 text-lg text-center text-white">
          {timeLeft.seconds}
          <span className="block text-sm text-gray-300">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
