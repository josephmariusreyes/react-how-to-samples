import React from 'react';
import { TestDriveForm } from '../../types';
import { useForm } from '../../hooks/useForm';
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
  const form = useForm<TestDriveForm>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      carModelId: carModelId
    },
    onSubmit: async (values) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(values);
      }
    },
    resetAfterSubmit: true,
    resetDelay: 3000
  });

  return (
    <div className="test-drive-form">
      <h3>Schedule a Test Drive</h3>
      <p className="form-subtitle">Experience the {carModelName} yourself</p>
      
      {form.status === 'success' && (
        <div className="form-message success">
          ✅ Thank you! Your test drive request has been submitted. We'll contact you soon to confirm the appointment.
        </div>
      )}
      
      {form.status === 'error' && (
        <div className="form-message error">
          ❌ There was an error submitting your request. Please try again.
        </div>
      )}
      
      <form onSubmit={form.handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.values.firstName}
              onChange={form.handleChange}
              required
              disabled={form.isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.values.lastName}
              onChange={form.handleChange}
              required
              disabled={form.isSubmitting}
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
              value={form.values.email}
              onChange={form.handleChange}
              required
              disabled={form.isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.values.phone}
              onChange={form.handleChange}
              required
              disabled={form.isSubmitting}
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
              value={form.values.preferredDate}
              onChange={form.handleChange}
              required
              disabled={form.isSubmitting}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="preferredTime">Preferred Time *</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={form.values.preferredTime}
              onChange={form.handleChange}
              required
              disabled={form.isSubmitting}
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
            value={form.values.message}
            onChange={form.handleChange}
            rows={4}
            disabled={form.isSubmitting}
            placeholder="Any specific questions or requirements?"
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={form.isSubmitting}
        >
          {form.isSubmitting ? 'Scheduling...' : 'Schedule Test Drive'}
        </button>
      </form>
    </div>
  );
};

export default TestDriveFormComponent;