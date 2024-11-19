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
import ParticipationMeter from './components/ParticipationMeter';
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
            <Route path="/how-to-join" element={<InfoSection sectionId="how-to-join" title="How to Join the Competition" content="Create an Account: Click on the link Exness or Hantec Market and sign up on our partner platform. Only accounts created through this link will qualify." />} />
            <Route path="/competition-details" element={<InfoSection sectionId="competition-details" title="Competition Details" content="Challenge Period: 1st Dec 2024 - 31st Dec 2024" />} />
            <Route path="/why-join" element={<InfoSection sectionId="why-join" title="Why Join?" content="Gain Real Trading Experience: Improve your skills in a live market environment." />} />
            <Route path="/conditions" element={<InfoSection sectionId="conditions" title="Conditions" content="1st priority - Minimum 0.50 cent lot required per day (lot size: 0.01 to maximum 0.10 acceptable)." />} />
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
