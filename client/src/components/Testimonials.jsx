// import { feedback } from "../constants";
// import styles from "../style";
// import FeedbackCard from "./FeedbackCard";

// const Testimonials = () => (
//   <section id="conditions" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
//     <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

//     <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
//       <h2 className={styles.heading2}>
//         What People are <br className="sm:block hidden" /> saying about us
//       </h2>
//       <div className="w-full md:mt-0 mt-6">
//         <p className={`${styles.paragraph} text-left max-w-[450px]`}>
//           Everything you need to accept card payments and grow your business
//           anywhere on the planet.
//         </p>
//       </div>
//     </div>

//     <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
//       {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
//     </div>
//   </section>
// );

// export default Testimonials;

import styles from "../style";

const Testimonials = () => (
  <section id="conditions" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Winning Criteria
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <ul className={`${styles.paragraph} text-left max-w-[450px] list-disc pl-5`}>
          <li>Make the highest profit.</li>
          <li>Make maximum withdrawals of the profit (count-wise and amount-wise).</li>
          <li>Profits will be rounded off to the nearest whole number:</li>
          <ul className="list-disc pl-5">
            <li>$100.01 to $100.50 will be considered $100.</li>
            <li>$100.51 to $100.99 will be considered $101.</li>
          </ul>
          <li>In case of a tie, the participant with maximum withdrawals will be declared the winner.</li>
        </ul>
      </div>

    </div>
  </section>
);

export default Testimonials;

