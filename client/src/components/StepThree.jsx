// src/components/StepThree.jsx
import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'; // Ensure this path is correct

const StepThree = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    mt5AccountNumber: '',
    broker: ''
  });
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/verify-account`, formData); // Updated API base URL
      if (response.data.verified) {
        setIsVerified(true);
        alert('Verification and registration successful!');
      } else {
        setIsVerified(false);
        setErrorMessage('MT5 account number and/or broker not verified. Please wait for it to be updated.');
      }
    } catch (error) {
      console.error('Error verifying account:', error.response?.data?.message || error.message);
      setErrorMessage('Error verifying account.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 text-gray-800">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
              <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="text-gray-600 font-semibold">Step 1</div>
              <div className="text-gray-600 font-semibold">Step 2</div>
              <div className="text-purple-600 font-semibold">Step 3</div>
            </div>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="text"
            name="mt5AccountNumber"
            placeholder="MT5 Account Number"
            value={formData.mt5AccountNumber}
            onChange={(e) => setFormData({ ...formData, mt5AccountNumber: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <select
            name="broker"
            value={formData.broker}
            onChange={(e) => setFormData({ ...formData, broker: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          >
            <option value="">Select Broker</option>
            <option value="Hentec Market">Hentec Market</option>
            <option value="Exness">Exness</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Submit
          </button>
          {errorMessage && <p className="text-center text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default StepThree;
