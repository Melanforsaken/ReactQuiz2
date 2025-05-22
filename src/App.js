import './App.css';
import ConfirmButton from './ConfirmButton'; 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import NextPage2 from './Page2';
import NextPage3 from './Page3';
import NextPage4 from './Page4';
import NextPage5 from './Page5';
import NextPage6 from './Page6';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState('');
  const [explanation, setExplanation] = useState('');
  const [canProceed, setCanProceed] = useState(false);
  const [attempted, setAttempted] = useState(false); 

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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React Quiz</h1>
        </header>
        <main className="App-body"> 
          <Routes>
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
                  {canProceed ? (
                    <Link to="/next-page" style={{ fontSize: '24px', textDecoration: 'none', color: 'black' }}>
                      Volgende Pagina <FaArrowRight />
                    </Link>
                  ) : (
                    attempted && !canProceed && ( 
                      <button onClick={handleRetry} style={{ fontSize: '14px', marginTop: '10px' }}>
                        Probeer Opnieuw
                      </button>
                    )
                  )}
                </div>
              </div>
            } />
            <Route path="/next-page" element={<NextPage2 />} />
            <Route path="/third-page" element={<NextPage3 />} />
            <Route path="/fourth-page" element={<NextPage4 />} />
            <Route path="/fifth-page" element={<NextPage5 />} />
            <Route path="/sixth-page" element={<NextPage6 />} />
          </Routes>
        </main>
        <ConfirmButton onConfirm={handleConfirm} />
      </div>
    </Router>
  );
}

export default App;