import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const NextPage = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-body">
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2>Welcome to the second page</h2>
          <p>
            This is the content of the second page. 
            {/* Add more content as necessary */}
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link to="/third-page" style={{ fontSize: '24px', textDecoration: 'none', color: 'black' }}>
              Volgende Pagina <FaArrowRight />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NextPage;