import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickHandler() {
        if (this.state.message === 'Hello') {
            this.setState({
                message: 'Goodbye'
            })
        } else {
            this.setState({
                message: 'Hello'
            })
        }

        console.log(this)
    }

    render() {
        return (
            <div><div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind