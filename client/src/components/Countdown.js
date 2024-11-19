import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const targetDate = new Date("2024-11-30T23:59:59").getTime(); // Adjust to the end of November 30th
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
    <div className="countdown">
      <div className="trading-title"><b>Trading Challenge: Double Win Opportunity!</b></div>
      <div className="time-container">
        <div className="time-box">
          {timeLeft.days}
          <span>Days</span>
        </div>
        <div className="time-box">
          {timeLeft.hours}
          <span>Hours</span>
        </div>
        <div className="time-box">
          {timeLeft.minutes}
          <span>Minutes</span>
        </div>
        <div className="time-box">
          {timeLeft.seconds}
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
