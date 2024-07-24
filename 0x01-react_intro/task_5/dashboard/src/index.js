import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <Notifications />
    <App />
  </div>
);
