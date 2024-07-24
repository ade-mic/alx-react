import logo from './logo.jpg';

import './App.css';
import {getFullYear, getFooterCopy} from './utils'

function App() {
  
  return (
    <div id='root' className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body" >
        <p>Login to access the full dashboard</p>
        <label for='email'>Email:</label>
        <input type='email' id='email'/>
        <label for='password'>Password:</label>
        <input type='password' id='password'/>
        <button>Ok</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </footer>
    </div>
  );
}

export default App;
