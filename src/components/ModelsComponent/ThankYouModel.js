import React from 'react';
import './ThankYouModal.css';

function ThankYouModal({ name, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>×</span>
        <h2>Thank You, {name}!</h2>
        <p>
          For reaching out to Anaimalai Motors. 
          Your request has been successfully registered with our IT team, and we will be in touch with you shortly.
          We appreciate your patience.
        </p>
      </div>
    </div>
  );
}

export default ThankYouModal;
