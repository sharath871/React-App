import React from 'react'
import ParentComp from './ParentComp'

function ChildComp(props) {
    return (
        <div>
           <h1>Click Here</h1>
            <button onClick={props.NameHandler}>Click Here</button>
        </div>
    )
}

export default ChildComp
