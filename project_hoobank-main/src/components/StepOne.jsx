// src/components/StepOne.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config'; // Ensure this path is correct

const StepOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    broker: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/register`, formData);
      if (response.status === 201) {
        setMessage('Registration successful!');
        navigate('/step-two');
      } else {
        setMessage('Failed to register.');
      }
      setFormData({ name: '', email: '', phoneNumber: '', broker: '' });
    } catch (error) {
      console.error('Error registering participant:', error.response?.data?.message || error.message);
      setMessage('Error registering participant.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 text-gray-800">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
              <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="text-gray-600 font-semibold">Step 1</div>
              <div className="text-gray-400">Step 2</div>
              <div className="text-gray-400">Step 3</div>
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
          <div>
            <label htmlFor="broker" className="block text-gray-700 font-semibold mb-2">Select Broker</label>
            <select
              id="broker"
              name="broker"
              value={formData.broker}
              onChange={(e) => setFormData({ ...formData, broker: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            >
              <option value="">Select a broker</option>
              <option value="Hentec Market">Hentec Market</option>
              <option value="Exness">Exness</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Register
          </button>
          {message && <p className="text-center text-red-500 mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default StepOne;
