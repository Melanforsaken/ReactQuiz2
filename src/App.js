import './App.css';
import ConfirmButton from './ConfirmButton'; 
import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState('');

  const correctAnswer = 'Components kunnen geen meerdere tags returnen in JSX'; // Define the correct answer

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedOption === correctAnswer) {
      setResult('correct');
    } else {
      setResult('wrong');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quiz</h1>
      </header>
      <main className="App-body"> 
        <h2>succes!</h2>
        <i>Vraag: "Welke hiervan is een restrictie die JSX heeft ten opzichte van standaard HTML code?"</i>
        <div className="quiz-options">
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="Components kunnen geen meerdere tags returnen in JSX" 
              onChange={handleOptionChange} 
            />
            <span>Components kunnen geen meerdere tags returnen in JSX</span>
          </label>
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="Attributen kunnen niet worden toegepast in JSX" 
              onChange={handleOptionChange} 
            />
            <span>Attributen kunnen niet worden toegepast in JSX</span>
          </label>
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="Comments worden niet ondersteund in JSX" 
              onChange={handleOptionChange} 
            />
            <span>Comments worden niet ondersteund in JSX</span>
          </label>
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="JSX staat geen zelfsluitende tags toe" 
              onChange={handleOptionChange} 
            />
            <span>JSX staat geen zelfsluitende tags toe</span>
          </label>
        </div>
        {result && <h3>{result}</h3>} {/* Display the result here */}
      </main> 
      <ConfirmButton onConfirm={handleConfirm} />
    </div>
  );
}

export default App;