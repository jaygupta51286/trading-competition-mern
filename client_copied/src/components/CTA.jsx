import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="competitiondetails" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Competition Details!</h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <p><strong>Competition Start Date:</strong> To Be Announced</p>
        <p><strong>Competition End Date:</strong> To Be Announced</p>
        <p><strong>Result Declaration Date:</strong> To Be Announced</p>
        <p><strong>Prize Distribution Date:</strong> To Be Announced</p>
      </div>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}> 
      <Button title="Participate Now" link="/step-one" styles="" /> 
    </div>
  </section>
);

export default CTA;
