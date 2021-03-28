import logo from './logo.svg';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gerson Morales <code>ADSI</code> GAES2.
        </p>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </header>
    </div>
  );
}

export default App;
