import React, { Component } from 'react'
import Hero from './Hero'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            HasError : false
        }
    }

    static getDerivedStateFromError(error) {

        return { HasError : true }
    }
    
    render() {
        if (this.state.HasError) {
           return <h2>something went Wrong</h2>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary
