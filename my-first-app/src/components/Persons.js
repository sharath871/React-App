import React from 'react'

function Persons({person}) {
    
    return (
        <div>
            <h1>My Name is {person.Name}, I am {person.Age}, My District is {person.Dist}</h1>
        </div>
    )
}

export default Persons
