import React, { Component } from 'react'

class BindingInConstructor extends Component {

    constructor(props){
        super(props)
        this.state={
            MyAge:'When i was 10th iam 14 years Old'
        }

      this.ChangeAge = this.ChangeAge.bind(this)
      
    }
    ChangeAge(){

        this.setState({
            MyAge:'Now my age is 25 years'
        })
        // console.log(myAge)
    }

    render() {
        return (
            <div>
                <p>{this.state.MyAge}</p>
                <button onClick={this.ChangeAge}>Click Here For Pesent Age</button>
            </div>
        )
    }
}

export default BindingInConstructor
