import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        This is the PSAS App

      <Home />
      </div>
    );
  }
}

export default App;
