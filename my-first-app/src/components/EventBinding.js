import React, { Component } from "react"

 class EventBinding extends Component {

    constructor(){
        super()
        this.state={
            Message:'Before Click'
        }

        this.ChangeMsg = this.ChangeMsg.bind(this)
    }

ChangeMsg(){

    this.setState({
        Message:'After Click'
    })

   
    
}

NameDis(Name){
    console.log('Hey...'+Name)
}

    render() {
        return (
            <div>

                <h1>{this.NameDis}</h1>
                <p>{this.state.Message}</p>
                {/* <button onClick={this.ChangeMsg.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.ChangeMsg()}>Click</button> */}
                <button onClick={this.ChangeMsg}>Click</button>
            </div>
        )
    }
}

export default EventBinding