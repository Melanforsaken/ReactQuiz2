import React from 'react';
import './Button.css'; 

const ConfirmButton = ({ onConfirm }) => {
  return (
    <button className="confirm-button" onClick={onConfirm}>
      bevestig keuze
    </button>
  );
};

export default ConfirmButton;