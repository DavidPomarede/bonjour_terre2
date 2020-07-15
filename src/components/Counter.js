import React, { Component } from 'react'


class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // Never change state directly, use setState() and because it's asynchronous,
    // use a callback function because the console with display a different value 
    // than the page.

    increment() {
        this.setState({
            count:  this.state.count + 1
        }, () => {console.log('Callback value', this.state.count)})

        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }
}



export default Counter
