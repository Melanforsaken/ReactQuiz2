import React from 'react';
import { useLocation } from 'react-router-dom';

const ScorePage = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 }; // Default to 0 if no score is provided

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Your Score</h2>
      <p>You scored: {score} out of 6</p>
      <button onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
};

export default ScorePage;