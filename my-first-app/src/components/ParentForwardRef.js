import React, { Component } from 'react'
import ChildForwardRef from './ChildForwardRef'

export class ParentForwardRef extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    

    render() {
        return (
            <div>
                <ChildForwardRef ref={this.inputRef}></ChildForwardRef>
                <button onClick={this.clickHandler}>Click Here</button>
               
            </div>
        )
    }
}

export default ParentForwardRef
