// src/components/Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config'; // Ensure this path is correct
import Navbar from './Navbar';
import styles from "../style";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/api/leaderboard`, {
        headers: { 'Cache-Control': 'no-cache' }, // Disable cache
      });
      console.log('API Response:', response.data); // Log the response data
      
      // Validate that the response data is an array
      if (Array.isArray(response.data)) {
        setLeaderboard(response.data); // Update state if data is an array
      } else {
        console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboard(); // Initial fetch
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Leaderboard</h1>
        <table className="w-full table-auto border-collapse bg-gray-50 mb-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-gray-800 font-semibold">Rank</th>
              <th className="px-4 py-2 text-left text-gray-800 font-semibold">Name</th>
              <th className="px-4 py-2 text-left text-gray-800 font-semibold">Profit</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index} className="even:bg-gray-100 odd:bg-white">
                <td className="border px-4 py-2">{entry.Rank}</td>
                <td className="border px-4 py-2">{entry.Name}</td>
                <td className="border px-4 py-2">{entry.Profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="relative w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          onClick={() => navigate('/')}
        >
          <span className="absolute inset-0 border-4 border-transparent rounded-lg animate-border smooth-border"></span>
          <span className="relative">Back to Home</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Leaderboard;
