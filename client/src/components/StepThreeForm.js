import React, { useState } from 'react';
import axios from 'axios';
import './StepThreeForm.css';

const StepThreeForm = () => {
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
      const response = await axios.post("http://localhost:5000/api/verify-account", formData);
      if (response.data.verified) {
        setIsVerified(true);
        alert('Verification and registration successful!');
      } else {
        setIsVerified(false);
        setErrorMessage('MT5 account number and/or broker not verified. Please wait for it to be updated.');
      }
    } catch (error) {
      console.error('Error verifying account:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '100%' }}></div>
          </div>
          <div className="step-labels">
            <div className="step-label">Step 1</div>
            <div className="step-label">Step 2</div>
            <div className="step-label active">Step 3</div>
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
        <input
          type="text"
          name="mt5AccountNumber"
          placeholder="MT5 Account Number"
          value={formData.mt5AccountNumber}
          onChange={(e) => setFormData({ ...formData, mt5AccountNumber: e.target.value })}
          required
        />
        <select
          name="broker"
          value={formData.broker}
          onChange={(e) => setFormData({ ...formData, broker: e.target.value })}
          required
        >
          <option value="">Select Broker</option>
          <option value="Hentec Market">Hentec Market</option>
          <option value="Exness">Exness</option>
        </select>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default StepThreeForm;
