import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './StudentPage.css';

function StudentPage() {
  const [formData, setFormData] = useState({
    business: '',
    surname: '',
    mobile: '',
    location: '',
    email: '',
    password: '',
    agree: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agree) {
      setSubmissionStatus({
        loading: false,
        error: 'You must agree to the Terms & Conditions',
        success: false
      });
      return;
    }

    setSubmissionStatus({
      loading: true,
      error: null,
      success: false
    });

    try {
      await addDoc(collection(db, 'users'), {
        ...formData,
        createdAt: new Date(),
        lastUpdated: new Date()
      });

      setSubmissionStatus({
        loading: false,
        error: null,
        success: true
      });

      // Reset form
      setFormData({
        business: '',
        surname: '',
        mobile: '',
        location: '',
        email: '',
        password: '',
        agree: false,
      });

    } catch (err) {
      setSubmissionStatus({
        loading: false,
        error: `Submission failed: ${err.message}`,
        success: false
      });
    }
  };

  return (
    <div className="student-page">
      <div className="left-panel">
        <h2>Nexus</h2>
        <p>Building Bridges,<br />Closing the Gaps</p>
      </div>
      
      <div className="right-panel">
        <h3><b>Let your next big move be with Nexus</b></h3>
        
        {submissionStatus.error && (
          <div className="error-message">
            {submissionStatus.error}
          </div>
        )}
        
        {submissionStatus.success && (
          <div className="success-message">
            Registration successful! Data saved to Firestore.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="business" 
            placeholder="Business name" 
            value={formData.business}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="text" 
            name="surname" 
            placeholder="Surname" 
            value={formData.surname}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="tel" 
            name="mobile" 
            placeholder="Mobile Number" 
            value={formData.mobile}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="text" 
            name="location" 
            placeholder="Current Country of Residence" 
            value={formData.location}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange} 
            required 
          />
          
          <label className="checkbox">
            <input 
              type="checkbox" 
              name="agree" 
              checked={formData.agree}
              onChange={handleChange} 
              required 
            /> 
            I agree to the Terms & Conditions
          </label>
          
          <button 
            type="submit" 
            className="primary-btn"
            disabled={submissionStatus.loading}
          >
            {submissionStatus.loading ? 'Processing...' : 'Sign up'}
          </button>
        </form>
        
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default StudentPage;