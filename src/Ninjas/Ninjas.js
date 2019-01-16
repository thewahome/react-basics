import React from 'react'

const Ninjas = (props) => {
    const { ninjas } = props
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

export default Ninjas