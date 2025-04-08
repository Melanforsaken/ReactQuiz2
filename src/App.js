import './App.css';
import ConfirmButton from './ConfirmButton'; 
import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState('');
  const [explanation, setExplanation] = useState('');

  const correctAnswer = 'Components kunnen geen meerdere tags returnen in JSX';
  
  const descriptions = {
    'Components kunnen geen meerdere tags returnen in JSX': 'Dit is juist omdat JSX slechts één root-element per component toestaat.',
    'Attributen kunnen niet worden toegepast in JSX': 'Onjuist, attributen kunnen wel degelijk worden toegepast in JSX.',
    'Comments worden niet ondersteund in JSX': 'Onjuist, comments in JSX worden ondersteund door gebruik te maken van de juiste syntaxis.',
    'JSX staat geen zelfsluitende tags toe': 'Onjuist, JSX staat zelfsluitende tags toe, vergelijkbaar met HTML.'
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedOption === correctAnswer) {
      setResult('correct');
    } else {
      setResult('verkeerd antwoord');
    }
    setExplanation(descriptions[selectedOption] || ''); 
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
        {explanation && <p>{explanation}</p>} {/* Display the explanation here */}
      </main> 
      <ConfirmButton onConfirm={handleConfirm} />
    </div>
  );
}

export default App;