import React, { useState } from 'react';
import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleEmailClick = () => {
    setShowEmail((prevShowEmail) => !prevShowEmail);
  };

  const handlePhoneClick = () => {
    setShowPhone((prevShowPhone) => !prevShowPhone);
  };

  if (!contact.email && !contact.phone && !contact.linkedin) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      {contact.email && (
        <button
          type="button"
          className={`btn btn--outline ${showEmail ? 'active' : ''}`}
          onClick={handleEmailClick}
        >
          {showEmail ? contact.email : 'Email me'}
        </button>
      )}
      {contact.phone && (
        <button
          type="button"
          className={`btn btn--outline ${showPhone ? 'active' : ''}`}
          onClick={handlePhoneClick}
        >
          {showPhone ? contact.phone : 'Call me'}
        </button>
      )}
      {contact.linkedin && (
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
          LinkedIn
        </a>
      )}
    </section>
  );
};

export default Contact;
