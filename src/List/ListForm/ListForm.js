import React, { Component } from 'react'
import './ListForm.css'

export default class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {user: props.pendingEditUser}
    }

    onFirstNameChange = (event) => {
        let user = this.state.user;
        user.firstName = event.target.value;
        this.setState({
            user: user
        })
    }

    onLastNameChange = (event) => {
        let user = this.state.user;
        user.lastName = event.target.value;
        this.setState({
            user: user
        })
    }

    onNotesChange = (event) => {
        let user = this.state.user;
        user.notes = event.target.value;
        this.setState({
            user: user
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let savedUser = this.state.user;
        this.props.onSaveUser(savedUser);
    }

    cancelEdit = (e) => {
        e.preventDefault();
        this.props.onCancel();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">First name</label>
                                <input type="text"
                                    value={this.state.user.firstName}
                                    onChange={this.onFirstNameChange}
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="First name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Last name</label>
                                <input type="text"
                                    value={this.state.user.lastName}
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
                                value={this.state.user.notes}
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
}
