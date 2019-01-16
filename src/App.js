import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Todos from './Todos/Todos'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Michelangelo', belt: 'Orange', id: 1, age: 20 },
      { name: 'Leonardo', belt: 'Blue', id: 2, age: 21 },
      { name: 'Raphael', belt: 'Red', id: 3, age: 23 },
      { name: 'Donatello', belt: 'Purple', id: 4, age: 22 }
    ],
    todos: [
      { id: 1, content: 'Finish videos' },
      { id: 2, content: 'Learn standards' },
      { id: 3, content: 'Design application' }
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
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <Navbar title="React Basics" user="Charles Wahome" />
        <h1 className="blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
