import React, { useState } from 'react';
import { carModels } from '../data/carModels';
import CarCard from '../components/common/CarCard';
import './ModelsPage.scss';

const ModelsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = [
    { value: 'all', label: 'All Models' },
    { value: 'sedan', label: 'Sedans' },
    { value: 'suv', label: 'SUVs' },
    { value: 'hybrid', label: 'Hybrids' },
    { value: 'truck', label: 'Trucks' },
    { value: 'hatchback', label: 'Hatchbacks' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  // Filter cars by category
  const filteredCars = selectedCategory === 'all' 
    ? carModels 
    : carModels.filter(car => car.category === selectedCategory);

  // Sort cars
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price.starting - b.price.starting;
      case 'price-high':
        return b.price.starting - a.price.starting;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="models-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Our Vehicle Models</h1>
          <p>Discover the perfect Toyota for your lifestyle and needs</p>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter">Sort by:</label>
            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="results-count">
            {sortedCars.length} model{sortedCars.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Models Grid */}
        <div className="models-grid">
          {sortedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Empty State */}
        {sortedCars.length === 0 && (
          <div className="empty-state">
            <h3>No models found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div className="cta-content">
            <h2>Need Help Choosing?</h2>
            <p>Our experts are here to help you find the perfect Toyota for your needs.</p>
            <a href="/contact-us" className="cta-button">
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;