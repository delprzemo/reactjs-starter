import React, { Component, useState } from 'react'
import './ListForm.css'
import TextInput from '../../Common/TextInput/TextInput'


function ListForm(props) {
    const [user, setUser] = useState(props.pendingEditUser);
    const [form, setForm] = useState({
        firstName: { error: '' },
        lastName: { error: '' }
    });

    function onFirstNameChange(model) {
        setUser({...user, firstName: model.value});
        setForm({...form, firstName: { error: model.error }});
    }

    function onLastNameChange(model) {
        setUser({...user, lastName: model.value});
        setForm({...form, lastName: { error: model.error }});
    }

    function onNotesChange(event) {
        // because it doesn't detect change in userVal as only child was changed
        setUser({...user, notes: event.target.value}); 
    }

    function onSubmit(e) {
        e.preventDefault();
        let savedUser = user;
        props.onSaveUser(savedUser);
    }

    function cancelEdit(e) {
        e.preventDefault();
        props.onCancel();
    }

    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <form onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <TextInput id="input_firstName"
                                value={user.firstName}
                                onChange={onFirstNameChange}
                                required = {true}
                                placeholder="First name"
                                label="First name" />

                        </div>
                        <div className="form-group col-md-6">
                            <TextInput id="input_lastName"
                                value={user.lastName}
                                onChange={onLastNameChange}
                                required = {true}
                                placeholder="Last name"
                                label="Last name" />

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Notes</label>
                        <input type="text"
                            className="form-control"
                            id="inputAddress"
                            value={user.notes}
                            onChange={onNotesChange}
                            placeholder="Notes" />
                    </div>

                    <button className="btn btn-primary margin-left" onClick={cancelEdit}>Cancel</button>

                    {form.firstName.error || form.lastName.error ?
                        <button type="submit" disabled className="btn btn-primary margin-left disabled">Save</button>
                        : <button type="submit" className="btn btn-primary margin-left">Save</button>
                    }

                </form>
            </div>
            <div className="col-md-2"></div>
        </div>

    )
}
 export default ListForm; 