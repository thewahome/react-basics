import React from 'react'

const Ninjas = (props) => {
    const { ninjas, deleteNinja } = props
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>{ninja.name} - {ninja.belt} - {ninja.age}</div>
                <button onClick={() => { deleteNinja(ninja.id) }}>Delete</button>
                <hr />
            </div>
        ) : null
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas