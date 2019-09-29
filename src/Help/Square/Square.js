import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = { color: "red-background" };
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        if(this.state) {
            if(this.state.color === "red-background") {
                this.setState({
                    color: "green-background"
                });
            } else {
                this.setState({
                    color: "red-background"
                });
            }
        }
    }

    render() {
        return (
            <div className={this.state.color}>Help</div>
        )
    }
}
