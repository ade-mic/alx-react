import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils';

function Footer() {
  
  return (
    <div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default Footer;
