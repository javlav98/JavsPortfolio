import React, { useState } from 'react';
import './ContactCore.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-form">
        <h1 className='contactHeader'>Get in Touch</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input type="text" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email"></label>
      <input type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="message"></label>
      <textarea id="message" value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)} rows="4" required></textarea>

      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default ContactForm;

