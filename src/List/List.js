import React, { Component, useState } from 'react'
import './List.css'
import ListForm from './ListForm/ListForm'

function List(props) {
    const usersInitial = [
        { firstName: "Jack", lastName: "Captain", notes: "He is good captain", id: 1 },
        { firstName: "Eva", lastName: "Cesar", notes: "Julius wife", id: 2 },
        { firstName: "Julia", lastName: "Smith", notes: "Very common last name. She works in chemical industry", id: 3 },
        { firstName: "Peter", lastName: "Seedorf", notes: "Don't try to make him angry", id: 4 }
    ]

    const [users, setUsers] = useState(usersInitial);
    const [pendingEditUser, setPendingEditUser] = useState(null);

    
    function removeUser(id) {
        const newUserList = users.filter(x => x.id !== id);
        setUsers(newUserList);
    }

    function editUser(user) {
        setPendingEditUser(user);
    }

    function getUsers() {
        function Row(props) {
            return (
                <tr id={"row_" + props.index}>
                    <th scope="row">{props.user.id}</th>
                    <td>{props.user.firstName}</td>
                    <td>{props.user.lastName}</td>
                    <td>{props.user.notes}</td>
                    <td><button onClick={(e) => editUser(props.user)} className="btn btn-info">Edit</button></td>
                    <td><button onClick={(e) => removeUser(props.user.id)} className="btn btn-danger">Remove</button></td>
                </tr>
            )
        }



        const listUsers = users.map((item, index) =>
            <Row key={"row_" + index}
                user={item} />
        )
        return listUsers;
    }

    function getHeader() {
        return (<tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>)
    }

    function onSaveUser(savedUser) {
        let newUsers = users;
        let index = newUsers.findIndex((user => user.id == savedUser.id));
        newUsers[index] = savedUser;
        setUsers(newUsers);
        setPendingEditUser(null);
    }

    function onCancel() {
        setPendingEditUser(null);
    }

    function renderListOrForm() {
        if (pendingEditUser) {
            return <div>
                <ListForm
                    pendingEditUser={pendingEditUser}
                    onSaveUser = {onSaveUser}
                    onCancel ={onCancel}
                     /></div>
        } else {
            return <div>
                <table className="table">
                    <thead className="thead-dark">
                        {getHeader()}
                    </thead>
                    <tbody>
                        {getUsers()}
                    </tbody>
                </table>
            </div>
        }
    }

    return (
        <div>
            {renderListOrForm()}
        </div>
    )
}

export default List;

