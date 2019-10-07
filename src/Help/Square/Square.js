import React, { Component } from 'react'
import './Square.css'
import { ColorContext } from '../../Contexts/ColorContext';

export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = { color: "red-background", running: true, hasError: false };
    }

    static contextType = ColorContext;

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
            if (this.state.color === "red-background" || this.state.color === this.context.secondColor) {
                this.setState({
                    color: this.context.firstColor
                });
            } else {
                this.setState({
                    color: this.context.secondColor
                });
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.onPauseButtonClick(e)}>Start/Stop</button>
                {this.state.running ? <div className={this.state.color}>{this.props.children}</div> : <div>Please click button</div>}
            </div>
        )
    }
}