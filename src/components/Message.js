// creating a class based component

import { Component } from "react"

class Message extends Component  {
    // every class component that you create must have the render method 
    render(){
        // this is how to pass props in a class based component 
        return <h1>Message: {this.props.messagecode}</h1>
    }
}

export default Message