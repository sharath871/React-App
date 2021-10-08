import React, { Component } from 'react'
import Moment from 'react-moment';
import moment from "moment";


class MomentPackDate extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
            date_create2 : moment().format(' Do MMMM YYYY, h:mm:ss a'),
            date_create3 : moment().format('dddd'),
            date_create3 : moment().format()
        }
    }
    

    render() {
        return (
            // <Moment format='MM-YYYY-DD'>
            //    07/10/2021
            // </Moment>
            <div>
            <div>{this.state.date_create}</div>
            <div>{this.state.date_create2}</div>
            <div>{this.state.date_create3}</div>
                <div>{this.state.date_create4}</div>
                </div>

        )

       
    }
}

export default MomentPackDate
