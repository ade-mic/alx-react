import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notification/Notifications';

function App() {
  
  return (
    <>
      <Notifications data-testid="notifications" />
      <Header data-testid="header" />
      <Login data-testid="login" />
      <Footer data-testid="footer" />
    </>
  );
}

export default App;

