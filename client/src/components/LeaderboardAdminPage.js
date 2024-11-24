import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';
import config from '../config'; // Adjust the path if needed

const LeaderboardAdminPage = () => {
  const [file, setFile] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

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
          `${config.API_BASE_URL}/api/leaderboard/upload-json`, // Updated API base URL
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
      const response = await axios.get(`${config.API_BASE_URL}/api/leaderboard`); // Updated API base URL
      setLeaderboard(response.data); // Update state
    } catch (error) {
      console.error('Error fetching leaderboard:', error.message);
    }
  };

  useEffect(() => {
    fetchLeaderboard(); // Initial fetch
  }, []);

  return (
    <div className="admin-page">
      <form onSubmit={handleFileUpload} className="form-container">
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload Leaderboard</button>
      </form>

      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{entry.Rank}</td>
                <td>{entry.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardAdminPage;
