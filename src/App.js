import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Todos from './Todos/Todos'
import EditTodos from './Todos/EditTodos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Finish videos' },
      { id: 2, content: 'Learn standards' },
      { id: 3, content: 'Design application' }
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    // create a copy of the array
    // add new todo to the list
    // set it as the new array
    let todos = [...this.state.todos, todo] // spread operators = foreach 
    this.setState({
      todos: todos
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
        <EditTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
