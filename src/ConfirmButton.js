import React from 'react';
import './Button.css'; 

const ConfirmButton = () => {
  const handleClick = () => {
    alert("Bevestigd!");
  };

  return (
    <button className="confirm-button" onClick={handleClick}>
      bevestig keuze
    </button>
  );
};

export default ConfirmButton;