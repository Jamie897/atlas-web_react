import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>School Dashboard</h1>
        </header>
      </div>
      <hr></hr>
      <div>
        <body className='App-body'>
          <p className='login'>Login to access the full dashboard</p>
        </body>
      </div>
      <hr></hr>
      <div>
        <footer className='App-footer'>
          <p className='copyright'>Copyright 2024 - holberton School</p>
        </footer>
      </div>
    </>
  );
}

export default App;
