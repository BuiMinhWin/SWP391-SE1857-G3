import React from 'react'

// function Greet(){
//     return <h1>Hello Visual</h1>
// }
const Greet = ({name, classRoom}) => {
    return (
        <div>
            <h1>Hello {name} belong to {classRoom}</h1>     
        </div>
    )
}

export default Greet;