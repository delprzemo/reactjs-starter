import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = { color: "red-background", running: true };
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onPauseButtonClick(e) {
        e.preventDefault();
        this.setState((state) => ({
            running: !state.running
        }));
    }
    

    tick = () => {
        if (this.state && this.state.running) {
            if (this.state.color === "red-background") {
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
            <div>
                <button onClick={(e) => this.onPauseButtonClick(e)}>Start/Stop</button>
                <div className={this.state.color}>Help</div>
            </div>
        )
    }
}


