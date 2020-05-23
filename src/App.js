import React, { Component } from 'react';
//import './App.css';

import Header from './components/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LoginForm email="abc@example.com"/>
      </div>
    );
  }
}

export default App;
