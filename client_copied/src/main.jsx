import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StepOne from './components/StepOne';
import ErrorBoundary from './components/ErrorBoundary';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import NotFound from './components/NotFound';
import Leaderboard from './components/Leaderboard';
import LeaderboardAdminPage from './components/LeaderboardAdminPage';
import AdminPage from './components/AdminPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ErrorBoundary>
    <Router>
       <Routes>
         <Route path="/" element={<App />} />
         <Route path="/step-one" element={<StepOne />} />
         <Route path="/step-two" element={<StepTwo />} />
         <Route path="/step-three" element={<StepThree />} />
         <Route path="/leaderboard" element={<Leaderboard />} />
         <Route path="/admin" element={<AdminPage />} />
         <Route path="/leaderboard-admin" element={<LeaderboardAdminPage />} />
         <Route path='*' element={<NotFound />} />
       </Routes>
     </Router>
     </ErrorBoundary>
  </React.StrictMode>
);


// src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from './App';
// import StepOne from './components/StepOne'; // Ensure this path is correct
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/step-one" element={<StepOne />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
