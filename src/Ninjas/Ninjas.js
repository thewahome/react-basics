import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        const { ninjas } = this.props
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>{ninja.name} - {ninja.belt}</div>
                </div>
            )
        })
        return (
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas