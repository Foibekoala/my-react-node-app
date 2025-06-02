import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './Pictures/logo.png';
import careerImg from './Pictures/C.png';
import internshipImg from './Pictures/I.png';
import scholarshipImg from './Pictures/S.png';
import jobImg from './Pictures/J.png';
import calendarImg from './Pictures/cale.png';
import resumeImg from './Pictures/resume.png';

function HomePage() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Nexus Logo" className="logo" />
        </div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <ul className="nav-links">
          <li><Link to="/student"><button>STUDENT</button></Link></li>
          <li><Link to="/employer"><button>EMPLOYER</button></Link></li>
          <li><Link to="/freelancer"><button>FREELANCER</button></Link></li>
          <li><Link to="/about"><button>ABOUT US</button></Link></li>
          <li><Link to="/contact"><button>CONTACT US</button></Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="body-content">
        <header className="main-header">
          <h1>NEXUS</h1>
        </header>

        {/* Services Section */}
        <section className="services-section">
          <div className="service-card">
            <div className="card-tag">Explore Now</div>
            <img src={careerImg} alt="Career Guidance" />
            <h3>CAREER GUIDANCE</h3>
          </div>
          <div className="service-card">
            <div className="card-tag">Explore Now</div>
            <img src={internshipImg} alt="Internships" />
            <h3>INTERNSHIPS</h3>
          </div>
          <div className="service-card">
            <div className="card-tag">Explore Now</div>
            <img src={scholarshipImg} alt="Scholarships" />
            <h3>SCHOLARSHIPS</h3>
          </div>
          <div className="service-card">
            <div className="card-tag">Explore Now</div>
            <img src={jobImg} alt="Job Inviting" />
            <h3>JOB INVITING</h3>
          </div>
        </section>

        {/* Boxes Container */}
        <div className="boxes-container">
          {/* Recent Updates Box */}
          <div className="recent-updates-box">
            <h2>Recent Updates</h2>
            <div className="updates-count">17</div>
            
            <div className="update-item">
              <img src={calendarImg} alt="Calendar" className="update-icon" />
              <div className="update-details">
                <h3>Upcoming Career Fair</h3>
                <p>May 5, 2020</p>
              </div>
            </div>
            
            <div className="update-item">
              <img src={resumeImg} alt="Resume" className="update-icon" />
              <div className="update-details">
                <h3>Resume Writing Workshop</h3>
                <p>April 18, 2012</p>
                <p>Location: Virtual</p>
              </div>
            </div>
            
            <button className="register-button">Register Now</button>
          </div>

          {/* Newsletter Subscription Box */}
          <div className="newsletter-box">
            <h2>Subscribe to Newsletter</h2>
            <p className="newsletter-description">Stay updated on career events and opportunities.</p>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            
            <div className="form-group">
              <label>Interests</label>
              <div className="interest-options">
                <label className="interest-checkbox">
                  <input type="checkbox" /> Job Hunting Tips
                </label>
                <label className="interest-checkbox">
                  <input type="checkbox" /> Career Development
                </label>
                <label className="interest-checkbox">
                  <input type="checkbox" /> Internship Opportunities
                </label>
              </div>
              <p className="interest-note">Select at least one</p>
            </div>
            
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        
        
      </div>
    </div>
  );
}

export default HomePage;