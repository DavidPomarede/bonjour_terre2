import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick= {clickHandler}>Click</button>
        </div>
    )
}

// above when clickhandler is clicked, do no invoke the funtion
// i.e. : ClickHandler()

export default FunctionClick