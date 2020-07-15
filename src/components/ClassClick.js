import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Button clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }

}

// Here this is a Component, so the changes are:
// 1)  invoke the function while declaring
// 2)  RENDER the RETURN
// 3)  during onClick event, name 'this' function, (add 'THIS')...
// 4)  call function during even using curly braces

export default ClassClick