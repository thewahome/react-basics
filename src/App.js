import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Ninjas from './Ninjas/Ninjas'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Michelangelo', belt: 'Orange', id: 1, age: 20 },
      { name: 'Leonardo', belt: 'Blue', id: 2, age: 21 },
      { name: 'Raphael', belt: 'Red', id: 3, age: 23 },
      { name: 'Donatello', belt: 'Purple', id: 4, age: 22 }
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar title="React Basics" user="Charles Wahome" />
        <h1>Ninja Turtles</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
