import React, { Component } from 'react'
import './ListForm.css'
import TextInput from '../../Common/TextInput/TextInput'

export default class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.pendingEditUser,
            formState: {
                firstName: { error: '' },
                lastName: { error: '' }
            }
        }
    }

    onFirstNameChange = (model) => {
        let user = this.state.user;
        user.firstName = model.value;

        this.setState({
            user: user,
            formState: {...this.state.formState, firstName: { error: model.error }}
        })
    }

    onLastNameChange = (model) => {
        let user = this.state.user;
        user.lastName = model.value;

        this.setState({
            user: user,
            formState: {...this.state.formState, lastName: { error: model.error }}
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
                                <TextInput id="input_firstName"
                                    value={this.state.user.firstName}
                                    onChange={this.onFirstNameChange}
                                    required = {true}
                                    placeholder="First name"
                                    label="First name" />

                            </div>
                            <div className="form-group col-md-6">
                                <TextInput id="input_lastName"
                                    value={this.state.user.lastName}
                                    onChange={this.onLastNameChange}
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
                                value={this.state.user.notes}
                                onChange={this.onNotesChange}
                                placeholder="Notes" />
                        </div>

                        <button className="btn btn-primary margin-left" onClick={this.cancelEdit}>Cancel</button>

                        {this.state.formState.firstName.error || this.state.formState.lastName.error ?
                            <button type="submit" disabled className="btn btn-primary margin-left disabled">Save</button>
                            : <button type="submit" className="btn btn-primary margin-left">Save</button>
                        }

                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>

        )
    }
}
