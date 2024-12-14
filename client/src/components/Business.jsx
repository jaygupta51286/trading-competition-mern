import { features } from "../constants";
import { PrizeDetails } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="whytojoin" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why Join?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        By Joining this event,
      </p>
      <ul className="list-disc pl-5 mt-5 text-dimWhite">
        <li>You will be having an opportunity to make your financial dreams true.</li>
        <li>You will be experiencing Trading emotions and can improve your skills in a live market environment.</li>
        <li>The only event where participants are allowed to withdraw their profits with no conditions.</li>
        <li>The only event which is not bounded with any rules i.e. you can take any support from the community, tools, strategies, or team.</li>
      </ul>

      <div className={`${styles.flexCenter} sm:mt-10 mt-6`}>
        <Button title="Join Now" link="/step-one" styles="" />
      </div>
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div> */}
    {/* <div className={`${layout.sectionImg} flex-col`}> 
      {PrizeDetails.map((detail, index) => (
        <FeatureCard key={detail.id} {...detail} index={index} />
        ))} 
    </div> */}
    <div className={`${layout.sectionImg} flex-col`}> 
            {features.map((feature, index) => ( 
              <FeatureCard key={feature.id} {...feature} index={index} /> 
            ))} 
          </div>
  </section>
);

export default Business;
