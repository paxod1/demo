import React, { Component } from "react";

class HeloComponentsone extends Component {
    state = {
        message: 'Hello',
        name: 'kichu',
    }

    updatemessage = () => {
        this.setState({ message: 'Hello ,React!' })

    }
    nameupdate = () => {
        this.setState({ name: 'Helo Kichu!' })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2>{this.state.name} </h2>
                <button onClick={this.updatemessage}>Update message</button>
                <button onClick={this.nameupdate}>update name</button>

            </div>
        )
    }

}

export default HeloComponentsone