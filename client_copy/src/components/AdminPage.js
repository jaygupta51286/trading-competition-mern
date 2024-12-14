import React, { useState } from 'react';
import axios from 'axios';
import './AdminPage.css';
import config from '../config'; // Adjust the path if needed

const AdminPage = () => {
  const [mt5AccountNumber, setMt5AccountNumber] = useState('');
  const [broker, setBroker] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/add-account`, { mt5AccountNumber, broker }); // Updated API base URL
      if (response.status === 201) {
        alert('MT5 Account Number and Broker added successfully!');
      } else {
        alert('Failed to add MT5 Account Number and Broker.');
      }
      setMt5AccountNumber('');
      setBroker('');
    } catch (error) {
      console.error('Error adding MT5 account number and broker:', error.response?.data?.message || error.message);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/leaderboard/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        alert('Leaderboard updated successfully!');
      } else {
        alert('Failed to update leaderboard.');
      }
    } catch (error) {
      console.error('Error uploading file:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="admin-page">
      <form onSubmit={handleFormSubmit} className="form-container">
        <input
          type="text"
          name="mt5AccountNumber"
          placeholder="MT5 Account Number"
          value={mt5AccountNumber}
          onChange={(e) => setMt5AccountNumber(e.target.value)}
          required
        />
        <select
          name="broker"
          value={broker}
          onChange={(e) => setBroker(e.target.value)}
          required
        >
          <option value="">Select Broker</option>
          <option value="Hentec Market">Hentec Market</option>
          <option value="Exness">Exness</option>
        </select>
        <button type="submit">Add Account</button>
      </form>

      <form onSubmit={handleFileUpload} className="form-container">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload Leaderboard</button>
      </form>
    </div>
  );
};

export default AdminPage;
