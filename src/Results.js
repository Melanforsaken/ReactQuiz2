import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Results = () => {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem('quizScore');
    const total = localStorage.getItem('totalQuestions') ? parseInt(localStorage.getItem('totalQuestions'), 10) : 0;

    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }
    setTotalQuestions(total);
  }, []);

  return (
    <div className="Results">
      <header className="Results-header">
        <h2>Resultaten</h2>
      </header>
      <main className="Results-body">
        <p>Je behaalde punten: <strong>{score}</strong></p>
        <p>Totaal aantal vragen: <strong>{totalQuestions}</strong></p>
        <p>Aantal juiste antwoorden: <strong>{score}</strong></p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => {
            localStorage.removeItem('quizScore');
            localStorage.removeItem('totalQuestions');
            window.location.reload(); 
          }}>
            Herstart Quiz
          </button>
        </div>
      </main>
    </div>
  );
};

export default Results;