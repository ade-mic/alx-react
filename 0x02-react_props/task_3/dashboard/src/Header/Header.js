import React from 'react';
import logo from '../asset/logo.jpg'

import './Header.css';
import {getFullYear, getFooterCopy} from '../asset/utils'

function Header() {
  
  return (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
  );
}
 
export default Header;
