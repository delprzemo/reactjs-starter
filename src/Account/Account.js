import React, { Component } from 'react'
import './Account.css'
import TextInput from '../Common/TextInput/TextInput'

const axios = require('axios');

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: "",
            formState: {
                email: { error: '' },
                password: { error: '' }
            }
        }
    }

    login = async (e) => {
        e.preventDefault();

        const result = await axios.post('https://reqres.in/api/login', {
            email: this.state.email,
            password: this.state.password
        }).catch(function (error) {
            alert("Wrong email or password")
        });

        if(result) {
            localStorage.setItem('token', result.data.token);
            this.setState({
                token: result.data.token,
                email: "",
                password: ""
            })
        }
    }

    logout = () => {
        this.setState({
            token: "",
            email: "",
            password: ""
        })

        localStorage.removeItem('token');
    }

    onEmailChange = (model) => {
        let email = model.value;

        this.setState({
            email: email,
            formState: { ...this.state.formState, email: { error: model.error } }
        })
    }

    onPasswordChange = (model) => {
        let password = model.value;

        this.setState({
            password: password,
            formState: { ...this.state.formState, password: { error: model.error } }
        })
    }

    getLoggedMenu() {
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div>
                    Hello {this.state.email}
                </div>
                <div className="center">
                    <img className="avatar" src="/user_headphones.png"></img>
                </div>
                <div className="right">
                    <button className="btn btn-primary margin-left" onClick={this.logout}>Log out</button>
                </div>
            </div>
        )
    }

    getNotLoggedMenu() {
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <form onSubmit={this.login}>
                            <div className="form-row">
                                <div className="form-group row">
                                    <TextInput id="input_email"
                                        value={this.state.email}
                                        onChange={this.onEmailChange}
                                        required={true}
                                        label="Email"
                                        placeholder="Email" />

                                </div>
                                <div className="form-group row">
                                    <TextInput id="input_psw"
                                        value={this.state.password}
                                        onChange={this.onPasswordChange}
                                        required={true}
                                        type="password"
                                        label="Password"
                                        placeholder="Password" />

                                </div>
                            </div>

                            <div className="right">
                                {this.state.formState.email.error || this.state.formState.password.error ?
                                    <button type="submit" disabled className="btn btn-primary margin-left disabled">Log in</button>
                                    : <button type="submit" className="btn btn-primary margin-left">Log in</button>
                                }
                            </div>

                        </form>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="dropdown dropleft">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.token ? this.state.email : ' Log in'}
                </button>

                {this.state.token ? this.getLoggedMenu() : this.getNotLoggedMenu()}
            </div>
        )
    }
}
