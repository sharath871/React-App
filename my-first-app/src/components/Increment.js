import react, { Component } from 'react'

class Increment extends Component{

    constructor(){
        super()

        this.state = {
            
            count : 0
        }
    }

    CountIncre(){
        this.setState({
            count:this.state.count+1
        }, ()=>{
            console.log(this.state.count)
        })
    }

render(){
    return(
    <div>
        <h1>Clicks count is {this.state.count}</h1>
        <button onClick={()=>this.CountIncre()}>Click Here</button>
    </div>)
}
}

export default Increment