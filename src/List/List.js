import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        const users = [
            { firstName: "Jack", lastName: "Captain", notes: "He is good captain", id: 1 },
            { firstName: "Eva", lastName: "Cesar", notes: "Julius wife", id: 2 },
            { firstName: "Julia", lastName: "Smith", notes: "Very common last name. She works in chemical industry", id: 3 },
            { firstName: "Peter", lastName: "Seedorf", notes: "Don't try to make him angry", id: 4 }
        ]
        this.state = { users: users, pendingEditUser: null };
    }

    onFirstNameChange = (event) => {
        let editedUser = this.state.pendingEditUser;
        editedUser.firstName = event.target.value;
        this.setState({ pendingEditUser: editedUser });
    }

    onLastNameChange = (event) => {
        let editedUser = this.state.pendingEditUser;
        editedUser.lastName = event.target.value;
        this.setState({ pendingEditUser: editedUser });
    }

    onNotesChange = (event) => {
        let editedUser = this.state.pendingEditUser;
        editedUser.notes = event.target.value;
        this.setState({ pendingEditUser: editedUser });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let savedUser = this.state.pendingEditUser;
        let users = this.state.users;
        let index = users.findIndex((user => user.id == savedUser.id));
        users[index] = savedUser;
        this.setState({ users: users, pendingEditUser: null });
    }

    cancelEdit = (e) => {
        e.preventDefault();
        this.setState({
            pendingEditUser: null
        })
    }

    getForm() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">First name</label>
                                <input type="text"
                                    value={this.state.pendingEditUser.firstName}
                                    onChange={this.onFirstNameChange}
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="First name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Last name</label>
                                <input type="text"
                                    value={this.state.pendingEditUser.lastName}
                                    onChange={this.onLastNameChange}
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Notes</label>
                            <input type="text"
                                className="form-control"
                                id="inputAddress"
                                value={this.state.pendingEditUser.notes}
                                onChange={this.onNotesChange}
                                placeholder="Notes" />
                        </div>

                        <button className="btn btn-primary margin-left" onClick={this.cancelEdit}>Cancel</button>
                        <button type="submit" className="btn btn-primary margin-left">Save</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>

        )
    }

    removeUser = (id) => {
        const newUserList = this.state.users.filter(x => x.id !== id);
        this.setState({
            users: newUserList
        })
    }

    editUser(user) {
        this.setState({
            pendingEditUser: user
        })
    }

    getUsers() {
        function Row(props) {
            return (
                <tr id={"row_" + props.index}>
                    <th scope="row">{props.user.id}</th>
                    <td>{props.user.firstName}</td>
                    <td>{props.user.lastName}</td>
                    <td>{props.user.notes}</td>
                    <td><button onClick={(e) => this.editUser(props.user)} className="btn btn-info">Edit</button></td>
                    <td><button onClick={(e) => this.removeUser(props.user.id)} className="btn btn-danger">Remove</button></td>
                </tr>
            )
        }

        Row = Row.bind(this);


        const listUsers = this.state.users.map((item, index) =>
            <Row key={"row_" + index}
                user={item} />
        )
        return listUsers;
    }

    getHeader() {
        return (<tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>)
    }

    renderListOrForm() {
        if (this.state.pendingEditUser) {
            return <div>{this.getForm()}</div>
        } else {
            return <div>
                <table className="table">
                    <thead className="thead-dark">
                        {this.getHeader()}
                    </thead>
                    <tbody>
                        {this.getUsers()}
                    </tbody>
                </table>
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.renderListOrForm()}
            </div>
        )
    }
}
