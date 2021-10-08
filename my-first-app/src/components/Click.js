import React from "react";

function Click(){

    function Clicked(){
       alert('Displyed')
    }

    return(

        <div>
            
            <button onClick={Clicked}>Click</button>
        </div>
        
    )
}

export default Click