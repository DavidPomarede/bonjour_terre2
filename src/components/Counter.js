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

        //  !!! WRONG WAY , ALWAYS DEAL WITH prevState: 

        // this.setState(
        //     {
        //     count:  this.state.count + 1
        //     }, 
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     }
        // )
        // console.log(this.state.count)

        // !!! RIGHT WAY AS FOLLOWS:

        this.setState(prevState => ({
            count: prevState.count + 1
        }))

        
        // this.setState((prevState, props) => ({
        //     count: prevState.count + props.addValue
        // }))

        console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}



export default Counter
