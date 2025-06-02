import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './EmployerPage.css'; // Reuse StudentPage.css or create new styles
import logo from './Pictures/logo.png'; // Import the logo

function EmployerPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    contactPerson: '',
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
      await addDoc(collection(db, 'employers'), {
        ...formData,
        userType: 'employer',
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
        companyName: '',
        industry: '',
        contactPerson: '',
        mobile: '',
        location: '',
        email: '',
        password: '',
        agree: false,
      });

    } catch (err) {
      setSubmissionStatus({
        loading: false,
        error: `Registration failed: ${err.message}`,
        success: false
      });
    }
  };

  return (
    <div className="employer-page">
      <div className="left-panel">
        <h2>Nexus</h2>
        <p>Building Bridges,<br />Closing the Gaps</p>
      </div>
      
      <div className="right-panel">
        <h3><b>Find the best talent for your organization</b></h3>
        
        {submissionStatus.error && (
          <div className="error-message">
            {submissionStatus.error}
          </div>
        )}
        
        {submissionStatus.success && (
          <div className="success-message">
            Registration successful! You can now post jobs.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="companyName" 
            placeholder="Company Name" 
            value={formData.companyName}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="text" 
            name="industry" 
            placeholder="Industry" 
            value={formData.industry}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="text" 
            name="contactPerson" 
            placeholder="Contact Person" 
            value={formData.contactPerson}
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
            placeholder="Company Location" 
            value={formData.location}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Company Email" 
            value={formData.email}
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="password" 
            name="password" 
            placeholder="Create Password" 
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
            {submissionStatus.loading ? 'Registering...' : 'Register as Employer'}
          </button>
        </form>
        
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default EmployerPage;