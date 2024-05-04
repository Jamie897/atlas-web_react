import './App.css';
import holbertonLogo from './holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2024 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;

