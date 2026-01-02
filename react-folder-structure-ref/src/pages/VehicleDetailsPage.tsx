import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCarById } from '../data/carModels';
import TestDriveForm from '../components/forms/TestDriveForm';
import './VehicleDetailsPage.scss';

const VehicleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [showTestDriveForm, setShowTestDriveForm] = useState<boolean>(false);

  if (!id) {
    return <Navigate to="/models" replace />;
  }

  const car = getCarById(id);

  if (!car) {
    return <Navigate to="/models" replace />;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'sedan': 'Sedan',
      'suv': 'SUV',
      'hatchback': 'Hatchback',
      'hybrid': 'Hybrid',
      'truck': 'Truck'
    };
    return labels[category] || category;
  };

  const allImages = [car.images.main, ...car.images.gallery];

  return (
    <div className="vehicle-details-page">
      <div className="container">
        {/* Vehicle Header */}
        <div className="vehicle-header">
          <div className="breadcrumb">
            <a href="/models">All Models</a> / <span>{car.name}</span>
          </div>
          <h1>{car.name}</h1>
          <div className="vehicle-meta">
            <span className="category">{getCategoryLabel(car.category)}</span>
            <span className="price">Starting at {formatPrice(car.price.starting)}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={allImages[selectedImage]} alt={`${car.name} - View ${selectedImage + 1}`} />
          </div>
          <div className="thumbnail-strip">
            {allImages.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${car.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="vehicle-content">
          <div className="vehicle-info">
            <section className="description-section">
              <h2>Overview</h2>
              <p>{car.description}</p>
            </section>

            <section className="specifications-section">
              <h2>Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Engine:</span>
                  <span className="spec-value">{car.specifications.engine}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Transmission:</span>
                  <span className="spec-value">{car.specifications.transmission}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Fuel Economy:</span>
                  <span className="spec-value">{car.specifications.fuelEconomy}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Seating:</span>
                  <span className="spec-value">{car.specifications.seating} passengers</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Drivetrain:</span>
                  <span className="spec-value">{car.specifications.drivetrain}</span>
                </div>
              </div>
            </section>

            <section className="features-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="vehicle-actions">
            <div className="price-info">
              <div className="price-label">Starting at</div>
              <div className="price-value">{formatPrice(car.price.starting)}</div>
              <div className="price-note">*MSRP excludes destination fee</div>
            </div>

            <div className="action-buttons">
              <button 
                className="test-drive-btn"
                onClick={() => setShowTestDriveForm(!showTestDriveForm)}
              >
                {showTestDriveForm ? 'Hide Form' : 'Schedule Test Drive'}
              </button>
              <a href="/contact-us" className="contact-btn">
                Contact Dealer
              </a>
            </div>

            <div className="availability">
              <span className={`availability-status ${car.available ? 'available' : 'unavailable'}`}>
                {car.available ? '✅ Available' : '❌ Currently Unavailable'}
              </span>
            </div>
          </div>
        </div>

        {/* Test Drive Form */}
        {showTestDriveForm && (
          <div className="test-drive-section">
            <TestDriveForm
              carModelId={car.id}
              carModelName={car.name}
              onSubmit={(data) => {
                console.log('Test drive scheduled:', data);
                // Handle form submission
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleDetailsPage;