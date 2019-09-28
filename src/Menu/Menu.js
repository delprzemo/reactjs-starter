import React, { Component } from 'react'
import './Menu.css'
import MenuItem from './MenuItem/MenuItem'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React start</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <MenuItem name="Home" url="/"/>
                            <MenuItem name="List" url="/list"/>
                            <MenuItem name="Help" url="/help"/>
                        </ul>
                </div>
            </nav>
        )
    }
}
