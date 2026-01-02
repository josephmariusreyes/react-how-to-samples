import React from 'react';
import { Link } from 'react-router-dom';
import { CarModel } from '../../types';
import './CarCard.scss';

interface CarCardProps {
  car: CarModel;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
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

  return (
    <div className="car-card">
      <div className="car-card-image">
        <img src={car.images.main} alt={car.name} />
        <div className="car-category">{getCategoryLabel(car.category)}</div>
      </div>
      
      <div className="car-card-content">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-description">{car.description}</p>
        
        <div className="car-highlights">
          <div className="highlight">
            <strong>Engine:</strong> {car.specifications.engine}
          </div>
          <div className="highlight">
            <strong>Fuel Economy:</strong> {car.specifications.fuelEconomy}
          </div>
          <div className="highlight">
            <strong>Seating:</strong> {car.specifications.seating}
          </div>
        </div>
        
        <div className="car-card-footer">
          <div className="car-price">
            <span className="price-label">Starting at</span>
            <span className="price-value">{formatPrice(car.price.starting)}</span>
          </div>
          
          <Link to={`/vehicle-details/${car.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;