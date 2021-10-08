import React, { Component } from 'react'

class MountingB extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'Sharath'
        }

        console.log('CompB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ComponentB Static Method')

        return null
    }

    componentDidMount() {
        console.log('ComponentB Compnent Did Mount')
    }
    
    render() {
        console.log('ComponentB Render')
        return (
            <div>
                ComponentB
            </div>
        )
    }
}

export default MountingB
