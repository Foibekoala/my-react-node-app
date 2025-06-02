import React, { useState } from 'react';
import { db } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student' // Default to student
  });

  const [loginStatus, setLoginStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginStatus({
      loading: true,
      error: null,
      success: false
    });

    try {
      // Determine which collection to query based on user type
      const collectionName = formData.userType === 'employer' ? 'employers' : 'users';
      
      const usersRef = collection(db, collectionName);
      const q = query(
        usersRef,
        where("email", "==", formData.email),
        where("password", "==", formData.password)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        throw new Error('Invalid email or password');
      }
      
      // Login successful
      const userData = querySnapshot.docs[0].data();
      setLoginStatus({
        loading: false,
        error: null,
        success: true
      });
      
      // Redirect based on user type
      if (formData.userType === 'employer') {
        navigate('/employer-dashboard');
        alert(`Welcome back, ${userData.companyName || userData.email}!`);
      } else {
        navigate('/student-dashboard');
        alert(`Welcome back, ${userData.surname || userData.email}!`);
      }
      
    } catch (err) {
      setLoginStatus({
        loading: false,
        error: err.message,
        success: false
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h2>Nexus</h2>
        <p>Building Bridges,<br />Closing the Gaps</p>
      </div>

      <div className="login-right">
        <h3><b>Let your next big move be with Nexus</b></h3>
        
        {loginStatus.error && (
          <div className="error-message">
            {loginStatus.error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div className="user-type-selector">
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={formData.userType === 'student'}
                onChange={handleChange}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="employer"
                checked={formData.userType === 'employer'}
                onChange={handleChange}
              />
              Employer
            </label>
          </div>

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
          <button 
            type="submit" 
            className="primary-btn"
            disabled={loginStatus.loading}
          >
            {loginStatus.loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        
        <div className="signup-links">
          <p>Don't have an account?</p>
          <div>
            <a href="/student">Sign up as Student</a> | {' '}
            <a href="/employer">Sign up as Employer</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;