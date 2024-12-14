import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { PrizeDetails } from "../constants";

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== PrizeDetails.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]" dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  </div>
);



const Billing = () => (
  <section id="howtojoin" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* Prize Details */}
      <div className={`${layout.sectionImg} flex-col`}>
        {PrizeDetails.map((detail, index) => (
          <FeatureCard key={detail.id} {...detail} index={index} />
        ))}
      </div>

      {/* Gradient Start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* Gradient End */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How To <br className="sm:block hidden" /> Join The Competition
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        No Registration Fee to participate in the competition. Participants should essentially have an account under the IB of the organizer.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To create an account under the IB of the organizer, follow the process below:
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <strong>Create an Account:</strong>
      </p>
      <ul className={`${styles.paragraph} max-w-[470px] mt-5 list-disc pl-5`}>
        <li>
          <strong>Exness:</strong>
          <p>Create New Account:</p>
          <a href="https://one.exnesstrack.net/a/721ebw05k3" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click on the link</a> 
          <p>Change IB Partner code: Use Partner Code: <code>721ebw05k3</code></p>
        </li>
        <li>
          <strong>Hantec Market:</strong>
          <p>Create New Account:</p>
          <a href="https://hmarkets.com/live-account-pre-registration/?cmp=6f6y5y2k&refid=13741&ent=hm" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click on the link</a>
          <p>And follow the process to complete the registration.</p>
        </li>
      </ul>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        For help, follow the process video on how to create an account or contact support (telegram link).
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <strong>Deposit:</strong> Fund your account with a minimum of $100 to be eligible for the competition. Only accounts created through the above links and accounts under the organizer’s IB will be qualified to participate in the competition.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <strong>Kindly be noted:</strong> Only accounts created through the above links and accounts under the organizer’s IB will be qualified to participate in the competition.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;

