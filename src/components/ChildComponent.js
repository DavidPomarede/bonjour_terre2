import React from 'react'


function ChildComponent(props) {
    return (
        <div>
                    {/* <button>Greet Parent</button> */}

            <button onClick={()=> {props.greetHandler('child')}}>Greet Parent</button>
        </div>
    )
}


export default ChildComponent