import logo from './logo.jpg';
import fav from './favicon.ico';

import './App.css';
import { useEffect } from 'react';

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
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
