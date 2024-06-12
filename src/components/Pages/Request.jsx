import React, { useState, useEffect } from 'react';
import './request.css';
import { getCurrentDate } from './date';
import { getCurrentTime } from './time';

const Request = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    address: '',
    email: '',
    state: '',
    lga: '',
    date: getCurrentDate(), // Set initial value for date
    time: getCurrentTime(), // Set initial value for time
    status: '',
    gender: '',
    userRequest: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="request">
      <h2>Request Form</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '' }}>
        <div className="hero-image">
          <img src="image/data.png" style={{ marginTop: '' }} alt="Census Data" />
        </div><br />
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        {/* Add other form fields similarly */}
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Select your date"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time of Entry</label>
          <input
            type="text"
            id="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Current time"
            disabled
          />
        </div>
        {/* Add other form fields similarly */}
        <div className="form-group">
          <label htmlFor="userRequest">Explain your request:</label>
          <textarea
            id="userRequest"
            value={formData.userRequest}
            onChange={handleChange}
            placeholder="Enter your request here"
          ></textarea>
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Request;
