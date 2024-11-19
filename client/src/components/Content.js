import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Content = () => {
  const [timeLeft, setTimeLeft] = useState("00 days 00 hours 00 minutes 00 seconds left");
  const [showForm, setShowForm] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accountNumber: '',
    mt5Number: '',
  });

  const formRef = useRef(null); // Ref for the form

  // Countdown timer logic
  useEffect(() => {
    const countdown = setInterval(() => {
      const targetDate = new Date("2024-11-30T23:59:59").getTime(); // Adjust to the end of November 30th
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeLeft("00 days 00 hours 00 minutes 00 seconds left");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days < 10 ? '0' + days : days} days ${hours < 10 ? '0' + hours : hours} hours ${minutes < 10 ? '0' + minutes : minutes} minutes ${seconds < 10 ? '0' + seconds : seconds} seconds left`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/participants", { ...formData, broker: selectedBroker });
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('There was an error registering your details.');
    }
  };

  // Scroll to form when it's shown
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Trigger scroll when form is shown
  useEffect(() => {
    if (showForm && formRef.current) {
      scrollToForm();
    }
  }, [showForm]);

  return (
    <main>
      <section className="prizes-countdown">
        <div className="countdown">
          <h2>🔥 Trading Challenge: Double Win Opportunity!</h2>
          <p>{timeLeft}</p>
        </div>
        <div className="prizes">
          <div className="prize-card">
            <h3>🥇 1st Prize</h3>
            <p>$100 + 10k Funded Account, Refunded Amount if you Pass Funded Account.</p>
          </div>
          <div className="prize-card">
            <h3>🥈 2nd Prize</h3>
            <p>$50 + 10k Funded Account, Refunded Amount if you Pass Funded Account.</p>
          </div>
          <div className="prize-card">
            <h3>🥉 3rd Prize</h3>
            <p>$30 + 5k Funded Account, Refunded Amount if you Pass Funded Account.</p>
          </div>
          <div className="prize-card">
            <h3>🏅 4th Prize</h3>
            <p>$20 + 5k Funded Account, Refunded Amount if you Pass Funded Account.</p>
          </div>
          <div className="prize-card">
            <h3>🎖️ 5th to 10th Prizes</h3>
            <p>$10 each</p>
          </div>
        </div>
      </section>

      <section className="register-section">
        <button className="register-btn" onClick={() => setShowForm(true)}>Register for the Competition</button>
      </section>

      {showForm && (
        <section ref={formRef} className="competition-registration">
          <h2>Register for the Competition</h2>
          <form onSubmit={handleFormSubmit} className="form-container">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              required
            />
            <input
              type="text"
              name="mt5Number"
              placeholder="MT5 Number"
              value={formData.mt5Number}
              onChange={(e) => setFormData({ ...formData, mt5Number: e.target.value })}
              required
            />

            <div className="broker-buttons">
              <button
                type="button"
                className={`broker-btn ${selectedBroker === 'Exness' ? 'active' : ''}`}
                onClick={() => setSelectedBroker('Exness')}
              >
                Exness
              </button>
              <button
                type="button"
                className={`broker-btn ${selectedBroker === 'Hantec Market' ? 'active' : ''}`}
                onClick={() => setSelectedBroker('Hantec Market')}
              >
                Hantec Market
              </button>
            </div>

            <button type="submit" className="submit-btn">Register</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default Content;
