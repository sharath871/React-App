import React, { Component } from "react";

class Message extends Component{

constructor(){
    super()
    this.state = {
        message:" Welcome to Our Channel"
    }
}

changeMsg(){

    this.setState({
        message:'Thank you For subscribing the channel'
    })
}




    render() {
        return( 
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMsg()}>Subscribe</button>
        </div>
            
            )
    }

}
export default Message