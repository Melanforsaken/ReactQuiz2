import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ConfirmButton from './ConfirmButton'; 

const NextPage3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState('');
  const [explanation, setExplanation] = useState('');
  const [canProceed, setCanProceed] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const correctAnswer = 'Sed do eiusmod tempor incididunt'; 

  const descriptions = {
    'Lorem ipsum dolor sit amet': 'Onjuist, dit is niet de juiste keuze.',
    'Consectetur adipiscing elit': 'Onjuist, dit is niet de juiste keuze.',
    'Sed do eiusmod tempor incididunt': 'Dit is juist omdat...',
    'Ut enim ad minim veniam': 'Onjuist, dit is niet de juiste keuze.'
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    setAttempted(true);
    if (selectedOption === correctAnswer) {
      setResult('correct');
      setCanProceed(true);
    } else {
      setResult('verkeerd antwoord');
      setCanProceed(false);
    }
    setExplanation(descriptions[selectedOption] || '');
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setResult('');
    setExplanation('');
    setCanProceed(false);
    setAttempted(false);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-body">
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2>Vraag: "Welke hiervan is een voorbeeld van Lorem Ipsum?"</h2>
          <div className="quiz-options" style={{ marginBottom: '20px' }}>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Lorem ipsum dolor sit amet"
                onChange={handleOptionChange}
              />
              <span>Lorem ipsum dolor sit amet</span>
            </label>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Consectetur adipiscing elit"
                onChange={handleOptionChange}
              />
              <span>Consectetur adipiscing elit</span>
            </label>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Sed do eiusmod tempor incididunt"
                onChange={handleOptionChange}
              />
              <span>Sed do eiusmod tempor incididunt</span>
            </label>
            <label>
              <input
                type="radio"
                name="quiz"
                value="Ut enim ad minim veniam"
                onChange={handleOptionChange}
              />
              <span>Ut enim ad minim veniam</span>
            </label>
          </div>
          {result && <h3>{result}</h3>}
          {explanation && <p>{explanation}</p>}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            {canProceed ? (
              <Link to="/third-page" style={{ fontSize: '24px', textDecoration: 'none', color: 'black' }}>
                Volgende Pagina <FaArrowRight />
              </Link>
            ) : (
              attempted && !canProceed && (
                <button onClick={handleRetry} style={{ fontSize: '24px', marginTop: '10px' }}>
                  Probeer Opnieuw
                </button>
              )
            )}
          </div>
        </div>
        <ConfirmButton onConfirm={handleConfirm} />
      </main>
    </div>
  );
};

export default NextPage3;