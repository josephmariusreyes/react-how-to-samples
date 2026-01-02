import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import { ContactForm as ContactFormType } from '../types';
import './ContactUsPage.scss';

const ContactUsPage: React.FC = () => {
  const handleContactSubmit = (data: ContactFormType) => {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to your backend API
  };

  return (
    <div className="contact-us-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Get in Touch</h1>
          <p>Have questions about our vehicles or need assistance? We're here to help!</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-section">
              <h2>Visit Our Showroom</h2>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <strong>Address</strong>
                  <p>
                    123 Toyota Way<br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Contact Information</h2>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <strong>Phone</strong>
                  <p>(555) 123-TOYOTA<br />(555) 123-8696</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <strong>Email</strong>
                  <p>info@toyotadealer.com<br />service@toyotadealer.com</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Business Hours</h2>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Departments</h2>
              <div className="department-list">
                <div className="department">
                  <strong>Sales Department</strong>
                  <p>New and certified pre-owned vehicles</p>
                  <span className="dept-phone">(555) 123-SALE</span>
                </div>
                <div className="department">
                  <strong>Service Department</strong>
                  <p>Maintenance, repairs, and parts</p>
                  <span className="dept-phone">(555) 123-SRVS</span>
                </div>
                <div className="department">
                  <strong>Finance Department</strong>
                  <p>Auto loans and lease options</p>
                  <span className="dept-phone">(555) 123-LOAN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <p>Interactive map would be displayed here</p>
              <p className="map-note">
                123 Toyota Way, Los Angeles, CA 90210
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h2>Quick Links</h2>
          <div className="links-grid">
            <a href="/models" className="quick-link">
              <div className="link-icon">🚗</div>
              <h3>Browse Models</h3>
              <p>Explore our complete vehicle lineup</p>
            </a>
            <a href="/models" className="quick-link">
              <div className="link-icon">🔧</div>
              <h3>Schedule Service</h3>
              <p>Book your vehicle maintenance</p>
            </a>
            <a href="#parts" className="quick-link">
              <div className="link-icon">⚙️</div>
              <h3>Parts & Accessories</h3>
              <p>Genuine Toyota parts and accessories</p>
            </a>
            <a href="#financing" className="quick-link">
              <div className="link-icon">💰</div>
              <h3>Financing Options</h3>
              <p>Learn about loans and lease deals</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;