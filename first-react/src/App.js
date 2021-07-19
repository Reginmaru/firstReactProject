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
        The link below will direct you to my GitHub Account.
        </p>
        <a
          className="App-link"
          href="https://github.com/Reginmaru/firstReactProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my GitHub project Repository
        </a>
      </header>
    </div>
  );
}

export default App;
