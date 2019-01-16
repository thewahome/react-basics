import React, { Component } from 'react'

export default class EditTodos extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({ content: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({ content: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new:</label>
                    <input value={this.state.content} type="text" name="todo" id="todo" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
