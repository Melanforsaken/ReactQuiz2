import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NextPage1 from './Page1';
import NextPage2 from './Page2';
import NextPage3 from './Page3';
import NextPage4 from './Page4';
import NextPage5 from './Page5';
import NextPage6 from './Page6';
import Score from './Results';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React Quiz</h1>
        </header>
        <main className="App-body"> 
          <Routes>
            <Route path="/" element={
              <div style={{ textAlign: 'center' }}>
                <h2>Welkom bij de React Quiz!</h2>
                <p>Deze quiz zal je basiskennis van React op de proef stellen. Na afloop van alle zes de vragen zal een eindresultaat volgen.</p>
                {/* Button veranderen zodat het localstorage leeg gaat halen. */}
                <Link to="/first-page">
                   <button className="start-button">
                    Start Quiz
                  </button>
                </Link>
              </div>
            } />
            <Route path="/first-page" element={<NextPage1 />} />
            <Route path="/next-page" element={<NextPage2 />} />
            <Route path="/third-page" element={<NextPage3 />} />
            <Route path="/fourth-page" element={<NextPage4 />} />
            <Route path="/fifth-page" element={<NextPage5 />} />
            <Route path="/sixth-page" element={<NextPage6 />} />
            <Route path="/score" element={<Score />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;