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
    <p>
      Components kunnen geen meerdere tags returnen in JSX
    </p>
    <p>
      Attributen kunnen niet worden toegepast in JSX
    </p>
    <p>
      Comments worden niet ondersteund in JSX
    </p>
    <p>
      JSX staat geen zelfsluitende tags toe
    </p>
    </main> 
    </div>
  );
}

export default App;
