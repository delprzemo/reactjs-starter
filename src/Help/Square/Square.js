import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {
    render() {

        let color = "red-background"

        function tick() {
            color = (color === "red-background") ? "green-background" : "red-background";
        }

        setInterval(tick, 1000);

        return (
            <div className={color}>Help</div>
        )
    }
}
