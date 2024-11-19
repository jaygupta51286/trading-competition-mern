import React from 'react';
import './Prizes.css';

const Prizes = () => {
  return (
    <section className="prizes">
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
    </section>
  );
}

export default Prizes;
