import logo from './logo.jpg';
import './Header.css';
import React from 'react';

function Header() {
  
  return (
    <div id='root' className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
    </div>
  );
}

export default Header;
