import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>test</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body className="App-body"> 
      <p>
      Deze quiz gaat over de inhoud van React
    </p>
    <p>
      Vraag: "Welke hiervan is een restrictie die JSX heeft ten opzichte van standaard HTML code?"
    </p>
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
    </body> 
    </div>
  );
}

export default App;
