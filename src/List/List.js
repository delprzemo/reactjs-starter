import React, { Component } from 'react'
import './List.less'

export default class List extends Component {
    constructor(props) {
        super(props);
        const users = [
            { firstName: "Jack", lastName: "Captain", notes: "He is good captain", id: 1 },
            { firstName: "Eva", lastName: "Cesar", notes: "Julius wife", id: 2 },
            { firstName: "Julia", lastName: "Smith", notes: "Very common last name. She works in chemical industry", id: 3 },
            { firstName: "Peter", lastName: "Seedorf", notes: "Don't try to make him angry", id: 4 }
        ]
        this.state = { users: users };
    }

    getUsers() {

        function Row(props) {
            return (
                <tr id={"row_" + props.index}>
                    <th scope="row">{props.id}</th>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.notes}</td>
                </tr>)
        }

        const listUsers = this.state.users.map((item, index) =>
            <Row key={"row_" + index}
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                notes={item.notes} />
        )
        return listUsers;
    }

    getHeader() {
        return (<tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>)
    }

    render() {

        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        {this.getHeader()}
                    </thead>
                    <tbody>
                        {this.getUsers()}
                    </tbody>
                </table>
            </div>
        )
    }
}
