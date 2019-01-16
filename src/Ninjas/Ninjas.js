import React from 'react'

const Ninjas = (props) => {
    const { ninjas } = props
    /*     
        // uses the conditional approach


        const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>{ninja.name} - {ninja.belt} - {ninja.age}</div>
                    <hr />
                </div>
            )
        } else {
            return null
        }
    }) */
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>{ninja.name} - {ninja.belt} - {ninja.age}</div>
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