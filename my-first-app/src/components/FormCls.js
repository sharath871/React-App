import React, { Component } from "react";

class FormCls extends Component{

    constructor(){
        super()
        this.state={
            name:'',
            phoneNumber:''
        }
    }

    ChangeName =(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    ChaneNumber=(event)=>{
        this.setState({
            phoneNumber:event.target.value
           
        })

        console.log(this.state.phoneNumber)
    }

    DetailsChange=(event)=>{
        alert(`Name is ${this.state.name}
        Number is ${this.state.phoneNumber}`)
        event.preventDefault()
    }
    
render(){
        return(
            <form onSubmit={this.DetailsChange}>
                <div>
                    <label>Name</label>
                    <input type='text' value={this.state.name} onChange={this.ChangeName}></input>
                   
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type='text' value={this.state.phoneNumber} onChange={this.ChaneNumber}></input>
                </div>

                <button>Submit</button>
            </form>

        )
    }
    
}

export default FormCls