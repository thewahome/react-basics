import React, { Component } from 'react'

export default class EditNinjas extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNinja(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" id="age" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="name">Belt:</label>
                    <input type="text" name="belt" id="belt" onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
