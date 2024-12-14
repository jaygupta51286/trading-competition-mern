import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'; // Ensure this path is correct

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
        headers: { 'Content-Type': 'multipart/form-data' },
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Admin Page</h1>

        {/* Form for Adding Account */}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">MT5 Account Number</label>
            <input
              type="text"
              name="mt5AccountNumber"
              placeholder="MT5 Account Number"
              value={mt5AccountNumber}
              onChange={(e) => setMt5AccountNumber(e.target.value)}
              required
              className="mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Broker</label>
            <select
              name="broker"
              value={broker}
              onChange={(e) => setBroker(e.target.value)}
              required
              className="mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select Broker</option>
              <option value="Hentec Market">Hentec Market</option>
              <option value="Exness">Exness</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          >
            Add Account
          </button>
        </form>

        {/* Form for Uploading File */}
        <form onSubmit={handleFileUpload} className="space-y-6 mt-8">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Upload Leaderboard</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className="mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          >
            Upload Leaderboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
