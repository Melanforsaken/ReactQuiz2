import './App.css';
import ConfirmButton from './ConfirmButton'; 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import NextPage from './NextPage';

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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React Quiz</h1>
        </header>
        <main className="App-body"> 
          <Routes>
            {/* Main Quiz Page */}
            <Route path="/" element={
              <div>
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
                {result && <h3>{result}</h3>}
                {explanation && <p>{explanation}</p>}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Link to="/next-page" style={{ fontSize: '24px', textDecoration: 'none', color: 'black' }}>
                    Volgende Pagina <FaArrowRight />
                  </Link>
                </div>
              </div>
            } />
            {/* Next Page */}
            <Route path="/next-page" element={<NextPage />} />
          </Routes>
        </main>
        <ConfirmButton onConfirm={handleConfirm} />
      </div>
    </Router>
  );
}

export default App;