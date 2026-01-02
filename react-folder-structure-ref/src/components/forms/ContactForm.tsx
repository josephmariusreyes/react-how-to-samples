import React from 'react';
import { ContactForm } from '../../types';
import { useForm } from '../../hooks/useForm';
import './ContactForm.scss';

interface ContactFormProps {
  onSubmit?: (data: ContactForm) => void;
}

const ContactFormComponent: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const form = useForm<ContactForm>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
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
    <div className="contact-form">
      <h2>Contact Us</h2>
      <p className="form-subtitle">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      
      {form.status === 'success' && (
        <div className="form-message success">
          ✅ Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}
      
      {form.status === 'error' && (
        <div className="form-message error">
          ❌ There was an error sending your message. Please try again.
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
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.values.phone}
              onChange={form.handleChange}
              disabled={form.isSubmitting}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <select
            id="subject"
            name="subject"
            value={form.values.subject}
            onChange={form.handleChange}
            required
            disabled={form.isSubmitting}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Sales Question">Sales Question</option>
            <option value="Service Support">Service Support</option>
            <option value="Parts & Accessories">Parts & Accessories</option>
            <option value="Warranty">Warranty</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={form.values.message}
            onChange={form.handleChange}
            rows={6}
            required
            disabled={form.isSubmitting}
            placeholder="Please provide details about your inquiry..."
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={form.isSubmitting}
        >
          {form.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactFormComponent;