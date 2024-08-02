import React from 'react';
import './Footer.css';
import {getFullYear, getFooterCopy} from '../asset/utils'

function Footer() {
  
  return (

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </footer>
  );
}

export default Footer;
