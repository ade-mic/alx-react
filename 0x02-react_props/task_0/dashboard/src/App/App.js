import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notification/Notifications';

function App() {
  
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
