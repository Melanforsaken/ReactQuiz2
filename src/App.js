import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> 
        React Quiz
        </h1>
      </header>
      <main className="App-body"> 
      <h2> 
      succes!
    </h2>
    <i>
      Vraag: "Welke hiervan is een restrictie die JSX heeft ten opzichte van standaard HTML code?"
    </i>
    <div className="quiz-options">
          <label>
            <input type="radio" name="quiz" />
            <span>
              Components kunnen geen meerdere tags returnen in JSX
              </span>
          </label>
          <label>
            <input type="radio" name="quiz" />
            <span>
              Attributen kunnen niet worden toegepast in JSX
              </span>
          </label>
          <label>
            <input type="radio" name="quiz" />
            <span>
              Comments worden niet ondersteund in JSX
              </span>
          </label>
          <label>
            <input type="radio" name="quiz" />
            <span>
              JSX staat geen zelfsluitende tags toe
              </span>
          </label>
        </div>
    </main> 
    </div>
  );
}

export default App;
