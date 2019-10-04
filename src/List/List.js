import React, { Component } from 'react'
import './List.css'
import ListForm from './ListForm/ListForm'


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

    onSaveUser= (savedUser) => {
        let users = this.state.users;
        let index = users.findIndex((user => user.id == savedUser.id));
        users[index] = savedUser;
        this.setState({ users: users, pendingEditUser: null });
    }

    onCancel = () => {
        this.setState({
            pendingEditUser: null
        })
    }

    renderListOrForm() {
        if (this.state.pendingEditUser) {
            return <div>
                <ListForm
                    pendingEditUser={this.state.pendingEditUser}
                    onSaveUser = {this.onSaveUser}
                    onCancel ={this.onCancel}
                     /></div>
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
        if (!localStorage.getItem('token')) return (<div>Please log in</div>)
        return (
            <div>
                {this.renderListOrForm()}
            </div>
        )
    }
}
