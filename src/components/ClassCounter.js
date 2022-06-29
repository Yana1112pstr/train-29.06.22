import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        }

    onIncrement() {
        this.setState({count: this.state.count + 1})
    }

    onDecrement() {
        this.setState({count: this.state.count - 1})
    }

    render () {
        return (
            <div>
        <button onClick={this.onIncrement}>Increment</button>
<span>{this.state.count}</span>
      <button onClick={this.onDecrement}>Decrement</button>
    </div>
        )
    }
}

export default ClassCounter;