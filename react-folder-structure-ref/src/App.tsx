import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import ModelsPage from './pages/ModelsPage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/vehicle-details/:id" element={<VehicleDetailsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
