import React, { Component } from "react";

class BindingKeyword extends Component{

    constructor(){
        super()

        this.state={
            Name:'Sharath Kumar'
        }

    }

    ChangeName(){

        this.setState({
            Name:'Bharath Kumar'
        })

    }

    render(){
        return(
            <div>
            <h1>{this.state.Name}</h1>
            <button onClick={this.ChangeName.bind(this)}>Click</button>
            </div>
        )
    }
}

export default BindingKeyword


