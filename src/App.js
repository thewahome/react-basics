import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Ninjas from './Ninjas/Ninjas'
import EditNinjas from './EditNinjas/EditNinjas'
class App extends Component {
  state = {
    ninjas: [
      { name: 'Michelangelo', belt: 'Orange', id: 1, age: 20 },
      { name: 'Leonardo', belt: 'Blue', id: 2, age: 21 },
      { name: 'Raphael', belt: 'Red', id: 3, age: 23 },
      { name: 'Donatello', belt: 'Purple', id: 4, age: 22 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random()
    // create a copy of the array
    // add new ninja to the list
    // set it as the new array
    let ninjas = [...this.state.ninjas, ninja] // spread operators = foreach 
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar title="React Basics" user="Charles Wahome" />
        <h1>Ninja Turtles</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <EditNinjas addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
