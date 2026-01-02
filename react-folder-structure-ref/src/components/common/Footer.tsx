import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Toyota</h3>
            <p>Let's Go Places</p>
            <p>Quality, Durability, Reliability</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/models">Models</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/contact-us">Contact Support</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#service">Service & Parts</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">📘</a>
              <a href="#twitter" aria-label="Twitter">🐦</a>
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#youtube" aria-label="YouTube">📺</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Toyota Motor Corporation. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;