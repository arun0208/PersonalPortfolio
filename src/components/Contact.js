import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the following channels:</p>
      <ul>
        <li>
          <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/arun-attri" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">Your Instagram Profile</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
