import React, { Component } from 'react'
// import Moment from 'react-moment';


class DateFormte extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myCurrentDate : new Date().toLocaleDateString()
        }
    }
    
    render() {

        return (
            <div>{this.state.myCurrentDate }</div>
        );
    }
    
}

export default DateFormte
