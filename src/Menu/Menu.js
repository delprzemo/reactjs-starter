import React, { Component } from 'react'
import './Menu.css'
import MenuItem from './MenuItem/MenuItem'
import Account from '../Account/Account'

export default class Menu extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React start</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="account">
                    <Account avatar={this.props.avatar}/>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <MenuItem name="Home" url="/" />
                        <MenuItem name="List" url="/list" />
                        <MenuItem name="Help" url="/help/3" />
                    </ul>
                </div>

            </nav>
        )
    }
}
