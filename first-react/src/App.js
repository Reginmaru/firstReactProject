import logo from './logo.svg';
import './App.css';
import Heading from "./heading.js"
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading />
        <p>
        The link below will direct you to my Github Account.
        </p>
        <a
          className="App-link"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
