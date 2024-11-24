import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Step1Form.css';

const Step1Form = () => {
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
    <div className="form-wrapper">
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '33%' }}></div>
          </div>
          <div className="step-labels">
            <div className="step-label active">Step 1</div>
            <div className="step-label">Step 2</div>
            <div className="step-label">Step 3</div>
          </div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          required
        />
        <div className="broker-options">
          <label htmlFor="broker" className="broker-label">Select Broker</label>
          <select
            id="broker"
            name="broker"
            value={formData.broker}
            onChange={(e) => setFormData({ ...formData, broker: e.target.value })}
            required
          >
            <option value="">Select a broker</option>
            <option value="Hentec Market">Hentec Market</option>
            <option value="Exness">Exness</option>
          </select>
        </div>
        <button type="submit">Register</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default Step1Form;
