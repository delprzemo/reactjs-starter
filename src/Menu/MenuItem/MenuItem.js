import React, { Component } from 'react'
import './MenuItem.less'
import { Link } from "react-router-dom";


function MenuItem(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.url}>{props.name}</Link>
        </li>
    )
}

export default  MenuItem;