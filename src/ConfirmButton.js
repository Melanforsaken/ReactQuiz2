import React from 'react';
import './Button.css'; 

const ConfirmButton = () => {
  const handleClick = () => {
    alert("Confirmed!");
  };

  return (
    <button className="confirm-button" onClick={handleClick}>
      Confirm
    </button>
  );
};

export default ConfirmButton;