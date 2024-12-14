import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import LeaderboardButton from "./components/LeaderboardButton";
import Button from "./components/Button";
import PrizeSection from "./components/PrizeSection";
import Prizes from "./components/Prizes";

const App = () => (
  <>
  
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      
        <Navbar />
         
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        {/* <Prizes /> */}
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Billing />
        <Business />
        {/* <CardDeal /> */}
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  </>
);

export default App;
