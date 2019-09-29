import React, { Component } from 'react'
import './Help.less'
import Square from './Square/Square'

export default class Help extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Square><h1>Hello world</h1></Square>
            </div>
        )
    }
}
