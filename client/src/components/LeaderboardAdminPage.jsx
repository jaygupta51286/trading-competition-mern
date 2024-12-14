import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'; // Ensure this path is correct
import Navbar from './Navbar';
import styles from '../style';

const LeaderboardAdminPage = () => {
  const [file, setFile] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        const response = await axios.post(
          `${config.API_BASE_URL}/api/leaderboard/upload-json`,
          jsonData,
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.status === 200) {
          alert('Leaderboard updated successfully!');
          fetchLeaderboard(); // Refresh leaderboard
        } else {
          alert('Failed to update leaderboard.');
        }
      } catch (error) {
        console.error('Error uploading data:', error.response?.data || error.message);
        alert('Invalid JSON file or server error.');
      }
    };

    reader.readAsText(file);
  };

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/api/leaderboard`, {
        headers: { 'Cache-Control': 'no-cache' }, // Disable cache
      });
      console.log('API Response:', response.data); // Log the response data
      
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
      {/* <Navbar /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 text-gray-800">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Admin: Leaderboard Management</h1>
          <form onSubmit={handleFileUpload} className="form-container mb-8">
            <input
              type="file"
              accept=".json"
              onChange={handleFileChange}
              required
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
            <button type="submit" className="mt-4 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg">
              Upload Entry
            </button>
          </form>

          <div className="leaderboard">
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
      </div>
    </>
  );
};

export default LeaderboardAdminPage;
