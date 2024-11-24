import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Leaderboard.css';
import config from '../config'; // Adjust the path if needed

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/api/leaderboard`, {
        headers: { 'Cache-Control': 'no-cache' }, // Disable cache
      });
      setLeaderboard(response.data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
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
  );
};

export default Leaderboard;
