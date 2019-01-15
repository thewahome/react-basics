import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="React Basics" user="Charles Wahome" />
        <h1>My first React app</h1>
      </div>
    );
  }
}

export default App;
