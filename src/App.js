import React, { Component } from 'react';

import Timer from './timer/container/timer-container';

import apple from './apple.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={apple} className="App-logo" alt="logo" />
          <h1 className="App-title">Pommodoro</h1>
        </header>
        <Timer />
      </div>
    );
  }
}

export default App;
