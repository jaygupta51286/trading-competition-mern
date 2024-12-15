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
            <Route path="/how-to-join" element={<InfoSection sectionId="how-to-join" title="How to Join the Competition" content={howToJoinContent} />} />
            <Route path="/competition-details" element={<InfoSection sectionId="competition-details" title="Competition Details" content={competitionDetailsContent} />} />
            <Route path="/why-join" element={<InfoSection sectionId="why-join" title="Why Join?" content={whyJoinContent} />} />
            <Route path="/conditions" element={<InfoSection sectionId="conditions" title="Winning Criteria" content={conditionsContent} />} />
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

const howToJoinContent = `
<h2>How to Join the Competition</h2>
<ul>
  <li><span class="emoji">🆓</span><p>No Registration Fee to participate in the competition</p></li>
  <li><span class="emoji">👤</span><p>Participants should have an account under the IB of the organizer</p></li>
  <li><span class="emoji">📝</span><p>To create an account under the IB of the organizer, follow the process below:</p></li>
  <ul>
    <li><span class="emoji">🔑</span><p>Create an Account:</p></li>
    <ul>
      <li><span class="emoji">🌐</span><p>Exness: <a href="https://one.exnesstrack.net/a/721ebw05k3" target="_blank">Create New Account</a> (Use Partner Code: 721ebw05k3)</p></li>
      <li><span class="emoji">🌐</span><p>Hantec Market: <a href="https://hmarkets.com/live-account-pre-registration/?cmp=6f6y5y2k&refid=13741&ent=hm" target="_blank">Create New Account</a></p></li>
      <li><span class="emoji">📹</span><p>For help, follow the process video "How to create account" or contact support [Telegram link]</p></li>
    </ul>
    <li><span class="emoji">💵</span><p>Deposit: Fund your account with a minimum of $100 to be eligible for the competition.</p></li>
  </ul>
  <p>⚠️ Kindly note: Only accounts created through the above links and under the organizer’s IB will be qualified to participate.</p>
</ul>
`;

const competitionDetailsContent = `
<h2>Competition Schedule</h2>
<ul>
  <li><span class="emoji">📅</span><p>Competition Start Date:</p></li>
  <li><span class="emoji">📅</span><p>Competition End Date:</p></li>
  <li><span class="emoji">📢</span><p>Result Declaration Date:</p></li>
  <li><span class="emoji">🎁</span><p>Prize Distribution Date:</p></li>
</ul>
`;

const conditionsContent = `
<h2>Winning Criteria</h2>
<ul>
  <li><span class="emoji">💰</span><p>Make the Highest Profit</p></li>
  <li><span class="emoji">💸</span><p>Make maximum withdrawals of the Profit (Count and Amount Wise)</p></li>
  <li><span class="emoji">🔢</span><p>Profits with round-off decimal values (e.g., 100.01 to 100.50 = 100; 100.51 to 100.99 = 101)</p></li>
  <li><span class="emoji">🏆</span><p>In case of a tie, maximum withdrawals will determine the winner.</p></li>
</ul>
`;

const whyJoinContent = `
<h2>Why Join?</h2>
<p>By joining this event, you will:</p>
<ul>
  <li><span class="emoji">🎯</span><p>Have an opportunity to make your financial dreams come true.</p></li>
  <li><span class="emoji">📈</span><p>Experience trading emotions and improve your skills in a live market environment.</p></li>
  <li><span class="emoji">🔓</span><p>Participate with no restrictions on withdrawing your profits.</p></li>
  <li><span class="emoji">🤝</span><p>Join an event with no rules, allowing support from the community, tools, strategies, and team.</p></li>
</ul>
`;

export default App;
