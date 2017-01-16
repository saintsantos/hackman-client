import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/Team.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <button>test</button>
          <Team></Team>
      </div>
    );
  }
}

export default App;
