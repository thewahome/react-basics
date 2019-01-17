import React, { Component } from 'react'
import Todos from '../Todos/Todos'
import EditTodos from '../Todos/EditTodos'


export default class About extends Component {
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
            <div className="container" >
                <h1 className="blue-text center">Todo List</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <EditTodos addTodo={this.addTodo} />
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti ipsam natus quis fugit sed nisi amet. Placeat voluptas quam magnam quisquam, consequatur esse doloribus ipsa, error ipsam cumque aperiam!</p>
            </div>
        )
    }
}

