import React from 'react';
import { Link } from 'react-router-dom';
import { carModels } from '../data/carModels';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const featuredModels = carModels.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Let's Go Places</h1>
          <p className="hero-subtitle">
            Discover the perfect Toyota vehicle that matches your lifestyle and adventures.
            Quality, durability, and reliability in every mile.
          </p>
          <div className="hero-actions">
            <Link to="/models" className="cta-button primary">
              Explore Models
            </Link>
            <Link to="/contact-us" className="cta-button secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://via.placeholder.com/600x400/0066CC/FFFFFF?text=Toyota+Hero+Image" 
            alt="Toyota vehicles" 
          />
        </div>
      </section>

      {/* Featured Models */}
      <section className="featured-models">
        <div className="container">
          <h2>Featured Models</h2>
          <p className="section-subtitle">Explore some of our most popular vehicles</p>
          
          <div className="models-grid">
            {featuredModels.map((model) => (
              <div key={model.id} className="featured-model">
                <div className="model-image">
                  <img src={model.images.main} alt={model.name} />
                </div>
                <div className="model-info">
                  <h3>{model.name}</h3>
                  <p className="model-price">Starting at ${model.price.starting.toLocaleString()}</p>
                  <p className="model-description">{model.description}</p>
                  <Link to={`/vehicle-details/${model.id}`} className="learn-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-models">
            <Link to="/models" className="view-all-btn">
              View All Models
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Toyota</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Advanced safety features and Toyota Safety Sense come standard across our lineup.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Hybrid Technology</h3>
              <p>Leading the way in hybrid innovation with exceptional fuel efficiency and performance.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔧</div>
              <h3>Reliability</h3>
              <p>Built to last with legendary Toyota quality, durability, and dependability.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌟</div>
              <h3>Innovation</h3>
              <p>Cutting-edge technology and design that enhances every journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Toyota?</h2>
            <p>Schedule a test drive today and experience the difference</p>
            <Link to="/models" className="cta-button primary large">
              Browse Our Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;