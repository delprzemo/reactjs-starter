import React, { Component, useState } from 'react'
import './List.css'
import ListForm from './ListForm/ListForm'
import { useSelector, useDispatch } from 'react-redux'
import {removeUser, setPendingEditUser, editUser} from '../Store/Actions/users.actions'

function List(props) {
    const usersInitial = [
        { firstName: "Jack", lastName: "Captain", notes: "He is good captain", id: 1 },
        { firstName: "Eva", lastName: "Cesar", notes: "Julius wife", id: 2 },
        { firstName: "Julia", lastName: "Smith", notes: "Very common last name. She works in chemical industry", id: 3 },
        { firstName: "Peter", lastName: "Seedorf", notes: "Don't try to make him angry", id: 4 }
    ]

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const pendingEditUser = useSelector(state => state.users.pendingEditUser);

    
    function handleRemoveUser(id) {
        dispatch(removeUser(id));
    }

    function onEditUser(user) {
        dispatch(setPendingEditUser(user));
    }

    function getUsers() {
        function Row(props) {
            return (
                <tr id={"row_" + props.index}>
                    <th scope="row">{props.user.id}</th>
                    <td>{props.user.firstName}</td>
                    <td>{props.user.lastName}</td>
                    <td>{props.user.notes}</td>
                    <td><button onClick={(e) => onEditUser(props.user)} className="btn btn-info">Edit</button></td>
                    <td><button onClick={(e) => handleRemoveUser(props.user.id)} className="btn btn-danger">Remove</button></td>
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
        dispatch(editUser(savedUser));
        dispatch(setPendingEditUser(null));
    }

    function onCancel() {
        dispatch(setPendingEditUser(null));
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

