import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Home';
import StudentPage from './StudentPage';
import EmployerPage from './EmployerPage';
import FreelancerPage from './FreelancerPage';
import LoginPage from './LoginPage';
import './App.css'; // Ensure this is imported so CSS works

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/student">Student</Link></li>
          <li><Link className="nav-link" to="/employer">Employer</Link></li>
          <li><Link className="nav-link" to="/freelancer">Freelancer</Link></li>
          <li><Link className="nav-link" to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/freelancer" element={<FreelancerPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;