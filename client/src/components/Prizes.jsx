import React from 'react';
import PrizeCard from './PrizeCard';
import './Prizes.css'; // Ensure your CSS is imported here

const prizeDetails = [
  {
    title: "🥇 1st Prize",
    details: "A. 100 USD<br />B. 10k Funded Account of the reputed funded account provider<br />C. Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."
  },
  {
    title: "🥈 2nd Prize",
    details: "A. 50 USD<br />B. 10k Funded Account of the reputed funded account provider<br />C. Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."
  },
  {
    title: "🥉 3rd Prize",
    details: "A. 30 USD<br />B. 10k Funded Account of the reputed funded account provider<br />C. Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."
  },
  {
    title: "🏅 4th Prize",
    details: "A. 20 USD<br />B. 10k Funded Account of the reputed funded account provider<br />C. Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."
  },
  {
    title: "🎖️ 5th to 10th Prizes",
    details: "A. 10 USD<br />B. 10k Funded Account of the reputed funded account provider<br />C. Refund of the funded account will be of winner participant if the Above funded account is passed by the participant with no time limit."
  }
];

const Prizes = () => {
  return (
    <section className="prizes">
      {prizeDetails.map((prize, index) => (
        <PrizeCard key={index} title={prize.title} details={prize.details} />
      ))}
    </section>
  );
};

export default Prizes;
