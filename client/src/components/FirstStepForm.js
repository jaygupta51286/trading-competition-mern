import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FirstStepForm.css';

const FirstStepForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    broker: ''
  });
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/participants", formData);
      navigate('/step-two', { state: { email: formData.email } });
    } catch (error) {
      console.error('Error registering participant:', error.response?.data?.message || error.message);
      alert('There was an error registering your details.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
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
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        required
      />

      <div className="broker-buttons">
        <button
          type="button"
          className={`broker-btn ${formData.broker === 'Exness' ? 'active' : ''}`}
          onClick={() => setFormData({ ...formData, broker: 'Exness' })}
        >
          Exness
        </button>
        <button
          type="button"
          className={`broker-btn ${formData.broker === 'Hantec Market' ? 'active' : ''}`}
          onClick={() => setFormData({ ...formData, broker: 'Hantec Market' })}
        >
          Hantec Market
        </button>
      </div>

      <button type="submit" className="submit-btn">Next</button>
    </form>
  );
}

export default FirstStepForm;
