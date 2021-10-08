import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
       this.SetFocus = React.createRef()
    }

    componentDidMount() {
        this.SetFocus.current.focus()
    }

    ShowInputs = () => {
        alert(this.SetFocus.current.value)
    }
    


    render() {
        return (
            <div>
                <input type='text' ref={this.SetFocus}></input>
                <button onClick={this.ShowInputs}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
