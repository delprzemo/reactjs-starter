import React, { Component, useState, useEffect } from 'react'
import './Square.css'

function useColor(initialColor) {
    const [color, changeColor] = useState(initialColor);
    function change(color) {
        changeColor(color);
    }

    useEffect(() => {
        console.log('Color changed');
    });

    return [color, change];
}

function Square(props) {

    const [color, changeColor] = useColor("red-background");
    const [running, changeRunning] = useState(true);

    useEffect(() => {
        const timer = setInterval(tick, 1000);
        return () => {
            clearInterval(timer);
        };
    });

    function onPauseButtonClick(e) {
        e.preventDefault();
        changeRunning(!running);
    }

    function tick() {
        if (running) {
            if (color === "red-background") {
                changeColor("green-background");
            } else {
                changeColor("red-background");
            }
        }
    }

    return (
        <div>
            <button onClick={(e) => onPauseButtonClick(e)}>Start/Stop</button>
            {running ? <div className={color}>{props.children}</div> : <div>Please click button</div>}
        </div>
    )
}

export default Square;