import React, { Component } from 'react'
import './ListForm.css'

export default class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.pendingEditUser,
            formState: {
                firstName: { touched: false, error: '', class: '' },
                lastName: { touched: false, error: '', class: '' }
            }
        }
    }

    onFirstNameChange = (event) => {
        let user = this.state.user;
        let error, validClass = "";
        user.firstName = event.target.value;

        if (!user.firstName) {
            error = "Value cannot be empty"
            validClass = "is-invalid"
        } else {
            error = ""
            validClass = "is-valid"
        }

        this.setState({
            user: user,
            formState: { ...this.state.formState, firstName: { touched: true, error: error, class: validClass } }
        })
    }

    onLastNameChange = (event) => {
        let user = this.state.user;
        let error, validClass = "";
        user.lastName = event.target.value;

        if (!user.lastName) {
            error = "Value cannot be empty"
            validClass = "is-invalid"
        } else {
            error = ""
            validClass = "is-valid"
        }

        this.setState({
            user: user,
            formState: { ...this.state.formState, lastName: { touched: true, error: error, class: validClass } }
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
                                    className={"form-control " + this.state.formState.firstName.class}
                                    id="inputEmail4"
                                    placeholder="First name" />
                                {this.state.formState.firstName.error ?
                                    <div className="invalid-feedback">
                                        {this.state.formState.firstName.error}
                                </div> : null
                                }

                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastName">Last name</label>
                                <input type="text"
                                    value={this.state.user.lastName}
                                    onChange={this.onLastNameChange}
                                    className={"form-control " + this.state.formState.lastName.class}
                                    id="inputLastName"
                                    placeholder="Last name" />
                                {this.state.formState.lastName.error ?
                                    <div className="invalid-feedback">
                                        {this.state.formState.lastName.error}
                                </div> : null
                                }

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
