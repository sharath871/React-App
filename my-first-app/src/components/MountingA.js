import React, { Component } from 'react'
import MountingB from './MountingB'

class MountingA extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'Sharath'
        }

        console.log('CompA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ComponentA Static Method')

        return null
    }

    componentDidMount() {
        console.log('ComponentA Compnent Did Mount')
    }
    
    render() {
        console.log('ComponentA Render')
        return (
            <div>
                ComponentA

                <MountingB></MountingB>
            </div>
        )
    }
}

export default MountingA
