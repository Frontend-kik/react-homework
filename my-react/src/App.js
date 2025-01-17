import logo from "./logo.svg";
import "./App.css";

function App() {
  const now = new Date().getFullYear(); // Декларативный стиль начинается здесь
  // JSX начинается здесь
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <h3>{now}</h3>
      </header>
    </div>
  );
  // JSX заканчивается здесь
}
export default App;
