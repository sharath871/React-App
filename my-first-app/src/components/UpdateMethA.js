import React, { Component } from 'react'

class UpdateMethA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Sharath'
         }
    }


    
    static getDerivedStateFromProps(state, props) {
        console.log('UpdateMethA GetDerivedStateFromProps')
        return null

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('UpdateMethA shouldComponentUpdate')
        return false
    }

    componentDidUpdate() {
        console.log('UpdateMethA ComponentDidUpdate')
    }

    ChangeName=()=> {
        this.setState({
            name:'Bharath'
        })

        console.log(this.state.name)
    }
     
    render() {

        console.log('Update Render Method')
        return (
            <div>
                Update Method<br></br>
                <button onClick = {this.ChangeName}>Click Here</button>
            </div>
        )
    }
}

export default UpdateMethA
