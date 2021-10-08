import React, { Component } from 'react'

class IfElse extends Component {

    constructor(){
        super()
        this.state = {
            IsLogedin:false
        }
    }

    render() {

        // 4th Approch
        return this.state.IsLogedin && <div>Welcome Sharath</div>

    //     3rd Approch

    //    return this.state.IsLogedin?(
    //     <div>Welcome Sharath</div>):(
    //     <div>Log in (or) Sign Up</div>)

        // Variable Approch 

        // let StoreValue

        // if(this.state.IsLogedin){
        //     StoreValue = <div>Welcome Sharath</div>
        // }else{
        //     StoreValue = <div>Log in (or) Sign Up</div>
        // }

        // return <p>{StoreValue}</p>

        
        // Statement Approch

        // if(this.state.IsLogedin){
        //     return <div>Welcome Sharath</div>
        // }else{
        //     return <div>Log in (or) Sign Up</div>
        // }

        
    }
}

export default IfElse
