import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Prizes from './components/Prizes';
import Step1Form from './components/Step1Form';
import StepTwoForm from './components/StepTwoForm';
import StepThreeForm from './components/StepThreeForm';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import LeaderboardAdminPage from './components/LeaderboardAdminPage';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import ParticipateButton from './components/ParticipateButton';
import ImageBox from './components/ImageBox';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <div className="hero-section">
                  <div className="hero-content">
                    <Countdown />
                    <ParticipateButton />
                  </div>
                  <div className="hero-side-content">
                    <ImageBox />
                  </div>
                </div>
                <section className="highlight-section">
                  <p>Your $100 Deposit Stays Yours! Keep all profits + win extra Bonus Prizes. Double the rewards for top performers!</p>
                </section>
                <section className="prizes-section">
                  <Prizes />
                </section>
              </>
            } />
            <Route path="/how-to-join" element={<InfoSection sectionId="how-to-join" title="How to Join the Competition" content={`
No Registration Fee to participate the competition
Participant should essentially have the account under the IB of the organizer 
To Create account under IB of the organizer follow the below process:
  Create an Account:
  Exness:
  Create New Account:
  Click on the link: https://one.exnesstrack.net/a/721ebw05k3
  Change IB Partner code: Use Partner Code: 721ebw05k3
  Hantec Market:
  Create New Account:
  Click on the link: https://hmarkets.com/live-account-pre-registration/?cmp=6f6y5y2k&refid=13741&ent=hm
  And follow the process to complete the registration.
  For help follow process video How to create account or contact support link (telegram link)
  Deposit: Fund your account with a minimum of $100 to be eligible for the competition.
Kindly be noted: Only accounts created through above link and accounts under the organizer’s IB will be qualified to participate the competition.
`} />}
            />
            <Route path="/competition-details" element={<InfoSection sectionId="competition-details" title="Competition Details" content={`
Competition Start Date:
Competition End Date:
Result Declaration Date:
Prize Distribution Date:
`} />}
            />
            <Route path="/why-join" element={<InfoSection sectionId="why-join" title="Why Join?" content={`
By Joining this event, 
You will be having an opportunity to make your financial dreams true.
You will be experiencing Trading emotions and can Improve your skills in a live market environment.
The only event where participants are allowed to withdraw their profits with no conditions.
The Only Event which is not bounded with any rules i.e. you can take any support from the community / Tools / Strategies / Team.
`} />}
            />
            <Route path="/winning-criteria" element={<InfoSection sectionId="winning-criteria" title="Winning Criteria" content={`
Make Highest Profit
Make maximum withdrawals of the Profit (Count Wise and Amount Wise)
All the participants who have make the profits with the round off the decimal values. (i.e. 100.01 to 100.50 will be considered 100 and 100.51-100.99 will be considered 101)
All participants who are in the tie then maximum withdrawals will be considered to finalize the winner participant.
`} />}
            />
            <Route path="/step-one" element={<Step1Form />} />
            <Route path="/step-two" element={<StepTwoForm />} />
            <Route path="/step-three" element={<StepThreeForm />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/leaderboard-admin" element={<LeaderboardAdminPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
