import React, { useState } from 'react';
import { TestDriveForm, FormStatus } from '../../types';
import './TestDriveForm.scss';

interface TestDriveFormProps {
  carModelId: string;
  carModelName: string;
  onSubmit?: (data: TestDriveForm) => void;
}

const TestDriveFormComponent: React.FC<TestDriveFormProps> = ({ 
  carModelId, 
  carModelName, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState<TestDriveForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    carModelId: carModelId
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
          carModelId: carModelId
        });
      }, 3000);
      
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <div className="test-drive-form">
      <h3>Schedule a Test Drive</h3>
      <p className="form-subtitle">Experience the {carModelName} yourself</p>
      
      {status === 'success' && (
        <div className="form-message success">
          ✅ Thank you! Your test drive request has been submitted. We'll contact you soon to confirm the appointment.
        </div>
      )}
      
      {status === 'error' && (
        <div className="form-message error">
          ❌ There was an error submitting your request. Please try again.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="preferredDate">Preferred Date *</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="preferredTime">Preferred Time *</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select a time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            disabled={isSubmitting}
            placeholder="Any specific questions or requirements?"
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule Test Drive'}
        </button>
      </form>
    </div>
  );
};

export default TestDriveFormComponent;