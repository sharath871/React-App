import React, { Component } from 'react'

class BindingWithArrowFun extends Component {

    constructor(){
        super()

        this.state={
            MyFavourite :'My Favourite Hero is NTR'
        }
    }

    MyFAvCity(){
        this.setState({
            MyFavourite:'My Favourite city is Hyderabad'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.MyFavourite}</h1>
                <button onClick={()=>this.MyFAvCity()}>Click Here to Know My Favourite City</button>
            </div>
        )
    }
}

export default BindingWithArrowFun
