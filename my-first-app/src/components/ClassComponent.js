import React, { Component } from "react";

class Wellcome extends Component {

    // render(){
    //     return(<h1>Hellooooooo class Component</h1>)

    constructor(props) {
        super(props);
      
        // Initializing the state 
        this.state = {
            color: 'red',
            fontSize:16

        };
      }
      componentDidMount() {
      
        // Changing the state after 2 sec
        // from the time when the component
        // is rendered
        setTimeout(() => {
            this.setState({
                color: 'yellow',
                fontSize:50
            });
        }, 5000);
    }
    
      render() {
        return (
          <div>
            <p 
                    style={{
                fontSize:this.state.fontSize,
                color: this.state.color,
                backgroundColor: 'rgba(0,0,0,0.88)',
                textAlign: 'center',
                paddingTop: 20,
                width: 400,
                height: 80,
                 margin: 'auto',
               
            
                
                
              }}
            >
              GeeksForGeeks
            </p>
      
          </div>
        );
      }
    
}


export default Wellcome