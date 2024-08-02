import React from 'react';

import './Login.css';
import {getFullYear, getFooterCopy} from '../asset/utils'

function Login() {
  
  return (
      <div className="App-body" >
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email'/>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password'/>
        <button>Ok</button>
      </div>
  )
}

export default Login;
