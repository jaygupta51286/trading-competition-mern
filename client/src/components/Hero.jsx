import styles from "../style";
import { discount, robot3 } from "../assets";
import GetStarted from "./GetStarted";
import Countdown from "./Countdown";
import ParticipateButton from "./ParticipateButton";
import robotImage from '../assets/robot3.png';


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">$100</span> Deposit Stays Yours!{" "}
            <span className="text-white">Keep all profits +</span> win extra Bonus Prizes. Double the rewards for top performers!
          </p>
        </div>

        

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Trading Challenge
        </h1>

        <div className="flex flex-col ss:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <Countdown />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 ml-4">
            <GetStarted />
          </div>
        </div>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts evaluates the best opportunities for traders to maximize 
        profits. We focus on rewards, funded accounts, and skill-building opportunities.
        </p> */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robotImage} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
