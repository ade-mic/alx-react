import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',
    alignItems: 'center',
    borderBottom: 'thick solid #e0344a',
    width: '100%',
    position: 'fixed',
  },
  
  headerImg: {
    width: '144px'
  },
  
  headerH1: {
    margin: '0'
  }
  
})

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.headerImg)} src={logo} alt='logo' />
      <h1 className={css(styles.headerH1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
