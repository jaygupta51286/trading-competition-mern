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
      const targetDate = new Date("2024-12-30T23:59:59").getTime(); // Adjust to the end of December 30th
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
    <div className="countdown bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-5">Double Win Opportunity!</h2>
      <div className="flex justify-center space-x-4">
        <div className="time-box bg-purple-700 p-4 rounded-lg shadow-lg text-white w-20 sm:w-28 md:w-32">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">{timeLeft.days}</span>
          <span className="block text-xs sm:text-sm text-gray-300">Days</span>
        </div>
        <div className="time-box bg-purple-700 p-4 rounded-lg shadow-lg text-white w-20 sm:w-28 md:w-32">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">{timeLeft.hours}</span>
          <span className="block text-xs sm:text-sm text-gray-300">Hours</span>
        </div>
        <div className="time-box bg-purple-700 p-4 rounded-lg shadow-lg text-white w-20 sm:w-28 md:w-32">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">{timeLeft.minutes}</span>
          <span className="block text-xs sm:text-sm text-gray-300">Minutes</span>
        </div>
        <div className="time-box bg-purple-700 p-4 rounded-lg shadow-lg text-white w-20 sm:w-28 md:w-32">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold">{timeLeft.seconds}</span>
          <span className="block text-xs sm:text-sm text-gray-300">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
