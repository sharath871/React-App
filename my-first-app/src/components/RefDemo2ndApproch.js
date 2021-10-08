import React, { Component } from 'react'

class RefDemo2ndApproch extends Component {
    constructor(props) {
        super(props)
    
        this.setFocus = React.createRef()
        this.focusInput = null
        this.focuscb = (element) => {
            this.focusInput = element
        }
    }
    
    componentDidMount() {
        if (this.focusInput) {
           this.focusInput.focus()
       }
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.focuscb}></input>
            </div>
        )
    }
}

export default RefDemo2ndApproch
