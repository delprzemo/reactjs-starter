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
                <Square />
            </div>
        )
    }
}
