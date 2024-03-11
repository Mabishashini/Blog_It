import React from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`custom-alert ${type}`}>
      <p className="message">{message}</p>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
