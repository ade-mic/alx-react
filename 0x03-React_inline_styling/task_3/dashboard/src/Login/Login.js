import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    padding: '16px 24px',
    marginTop: '160px'
  },

  loginInput: {
    margin: '4px 0',
    display: 'block',
    width: '100%',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  loginButton: {
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    marginTop: '12px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  }
  
})
function Login() {
  return (
    <main role='main' className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input className={css(styles.loginInput)} type='email' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input className={css(styles.loginInput)} type='password' name='password' id='password' />
      <button className={css(styles.loginButton, styles.loginInput)} type='button'>OK</button>
    </main>
  );
}

export default Login;
