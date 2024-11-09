// Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Add shaking form fields and spooky success message

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="contact" className="contact-section">
      <img src="/assets/footer-tree2.png" alt="hello" className='DownsTree' />
      <img src="/assets/home-tree2.png" alt="hello" className='DownsTree2' />
      <form onSubmit={handleSubmit}>
      <h2 className='MainHeading ConMe' >Contact Me</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="cta1-btn">Send</button>
      </form>
      {submitted && <p className="success-message">Your message has been sent into the shadows!</p>}
    </div>
  );
}

export default Contact;
