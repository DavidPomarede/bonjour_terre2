import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Click to Subscribe'
        }
    }

    changeMessage() {
        if (this.state.message == 'Click to Subscribe'){
            this.setState({
                message:"Thank you for Subscribing!"
            })
        } else {
            this.setState({
                message:"Click to Subscribe"
            })
        }

    }

    render () {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}


export default Message;