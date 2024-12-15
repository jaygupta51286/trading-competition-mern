import React from 'react';
import PrizeCard from './PrizeCard';
import styles from '../style';

const prizes = [
  {
    title: "🥇 1st Prize",
    details: ["100 USD", "10k Funded Account of the reputed funded account provider", "Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."]
  },
  {
    title: "🥈 2nd Prize",
    details: ["50 USD", "10k Funded Account of the reputed funded account provider***", "Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."]
  },
  {
    title: "🥉 3rd Prize",
    details: ["30 USD", "10k Funded Account of the reputed funded account provider***", "Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."]
  },
  {
    title: "🏅 4th Prize",
    details: ["20 USD", "10k Funded Account of the reputed funded account provider***", "Refund of the funded account will be of winner participant if the above funded account is passed by the participant with no time limit."]
  },
  {
    title: "🎖️ 5th to 10th Prizes",
    details: ["10 USD each"]
  }
];

const PrizeSection = () => {
  return (
    <section className="prizes flex flex-wrap justify-center gap-4">
      {prizes.map((prize, index) => (
        <PrizeCard key={index} title={prize.title} prizeDetails={prize.details} />
      ))}
    </section>
  );
};

export default PrizeSection;
