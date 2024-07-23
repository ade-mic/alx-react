import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import Notifications from './Notifications';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />);

const notificationsContainer = document.getElementById('root-notifications');
const notificationsRoot = createRoot(notificationsContainer);
notificationsRoot.render(<Notifications />);
