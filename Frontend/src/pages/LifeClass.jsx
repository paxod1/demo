import React, { Component } from "react";


class LifeCycleDemo extends Component {

    state = {
        count: 0,


    }

    componentDidMount() {
        console.log("component did mount!");
    }

    componentDidUpdate() {
        console.log("component did update!");

    }
    componentWillUnmount() {
        console.log("component will unmount");

    }

    incrementCount = () => {
        this.setState((prevstate) => ({
            count: prevstate.count + 1

        }))
    }



    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
            </div>

        )
    }
}

export default LifeCycleDemo