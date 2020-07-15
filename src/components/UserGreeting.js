import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        // SHORT CIRCUIT OPERATOR:

        return this.state.isLoggedIn && <div>Welcome David</div>

        // TERTIARY OPERATOR:

        // return this.state.isLoggedIn ? (
        //     <div>Welcome David</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // do it in JS, or better yet use TERTIARY and SHORT CIRCUIT OPERATORS
        // BELOW ARE OTHER DEMO METHODS, TRY TO AVOID THEM, 
        // (BUT ESPECIALLY TRY TO AVOID DOING LOGIC IN JSX!!) :


        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome David</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


            // DON'T DO IF/ELSE IN JSX:

        // if(this.state.isLoggedIn) {
        //     return <div>Welcome David</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome David</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting