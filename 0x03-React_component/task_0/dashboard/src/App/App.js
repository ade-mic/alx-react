import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notification/Notifications';

class App extends Component {
  render() {
  return (
    <>
      <Notifications data-testid="notifications" />
      <Header data-testid="header" />
      <Login data-testid="login" />
      <Footer data-testid="footer" />
    </>
  );
}
}

export default App;

