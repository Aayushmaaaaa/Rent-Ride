import React, { useState } from 'react';
import './ContactUsPage.css';
import { Link, useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('pending'); // Indicate submission in progress

    // Simulate sending a message (replace with your actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log('Message sent:', formData);
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmissionStatus('error');
    }
  };

  const handleGoToHomepage = () => {
    navigate('/'); // Assuming '/' is your logged-in homepage route
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-right">
        <h1>Contact Us</h1>
        <p className="contact-us-intro">
          We'd love to hear from you! Please use the form below for inquiries, feedback, or questions.
          Our team will get back to you as soon as possible.
        </p>

        <div className="important-info">
          <h2>Important Information</h2>
          <p><strong>Our Location:</strong> Bhagawati Marg, Naxal, Bagmati Province, Nepal</p>
          <p><strong>Email:</strong> <a href="mailto:[Your Company Email]">drifteasily@gmail.com</a></p>
          <p><strong>Phone:</strong>9812345678</p>
          {/* You can add more important information here */}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your inquiry"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={submissionStatus === 'pending'}>
            {submissionStatus === 'pending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {submissionStatus === 'success' && (
          <div className="success-message-box">
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We will get back to you shortly.</p>
          </div>
        )}

        {submissionStatus === 'error' && (
          <div className="error-message-box">
            <h3>Oops!</h3>
            <p>There was an error sending your message. Please try again later.</p>
          </div>
        )}

        <button className="return-home-button" onClick={handleGoToHomepage}>
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ContactUsPage;