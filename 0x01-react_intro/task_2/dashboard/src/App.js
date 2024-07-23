import logo from './logo.jpg';
import fav from './favicon.ico';

import './App.css';
import { useEffect } from 'react';
import {getFullYear, getFooterCopy} from './utils'

function App() {
  useEffect(() => {
    document.title = "Holberton School";
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = {fav};
    document.head.appendChild(link)

});
  
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
        <input type='email' id='email'/>
        <label for='email'>email</label>
        <input type='password' id='password'/>
        <label for='password'>password</label>
        <button>Ok</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
