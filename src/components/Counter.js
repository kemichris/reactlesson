import { Component } from "react";

// Using state inside a class based component 
class Counter extends Component {
    constructor(){
        super();
        this.state = {
        Counter: 0,
        };
    }

    increment(){
        this.setState({
            Counter: this.state.Counter + 1,
        });
    }

    decrement() {
        this.setState({
            Counter: this.state.Counter - 1,
        });
    }

    render() {
        return(<div>
            <h3>Count Value is: {this.state.Counter} </h3>
            <button onClick={()=> this.increment()} >Increment</button>
            <button onClick={()=> this.decrement()}>Decrement</button>
        </div>) 
    }
}

export default Counter