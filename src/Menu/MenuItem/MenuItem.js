import React, { Component } from 'react'
import './MenuItem.less'
import { Link } from "react-router-dom";


export default class MenuItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={this.props.url}>{this.props.name}</Link>
            </li>
        )
    }
}
