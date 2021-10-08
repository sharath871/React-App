import React, { Component } from 'react'
import ChildComp from './ChildComp'

 class ParentComp extends Component {

    constructor(){
        super()
        this.state={
            name:'Parent Class'
        }

        this.ChangeName = this.ChangeName.bind(this)

    }

    ChangeName(){
       alert('This is '+this.state.name)
    }

    render() {
        return (
            <div>
              <ChildComp NameHandler={this.ChangeName}></ChildComp>
            </div>
        )
    }
}

export default ParentComp
