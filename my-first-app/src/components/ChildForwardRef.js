import React from 'react'

// function ChildForwardRef() {
//     return (
//         <div>
            
//         </div>
//     )
// }


const ChildForwardRef = React.forwardRef((prop,ref) => {
    
    return (
                <div>
                    <input type ='text' ref={ref}></input>
                </div>
            )
})

export default ChildForwardRef

