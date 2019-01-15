import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        const { title, user } = this.props
        return (
            <div className="navbar">
                <div>{title}
                    <div>{user}</div>
                </div>
            </div>
        )
    }
}

export default Navbar