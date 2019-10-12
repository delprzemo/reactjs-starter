import React, { Component, useState } from 'react'
import './Account.css'
import TextInput from '../Common/TextInput/TextInput'

const axios = require('axios');


function Account() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [formState, setFormState] = useState({
        email: { error: '' },
        password: { error: '' }
    });

    async function login(e) {
        e.preventDefault();

        const result = await axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).catch(function (error) {
            alert("Wrong email or password")
        });

        if (result) {
            localStorage.setItem('token', result.data.token);
            setEmail("");
            setPassword("");
            setToken(result.data.token);
        }
    }

    function logout() {
        setEmail("");
        setPassword("");
        setToken("");
        localStorage.removeItem('token');
    }

    function onEmailChange(model) {
        let email = model.value;

        setEmail(email);
        setFormState({ ...formState, email: { error: model.error } });
    }

    function onPasswordChange(model) {
        let password = model.value;

        setPassword(password);
        setFormState({ ...formState, password: { error: model.error } });
    }

    function getLoggedMenu() {
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div>
                    Hello {email}
                </div>
                <div className="center">
                    <img className="avatar" src="/user_headphones.png"></img>
                </div>
                <div className="right">
                    <button className="btn btn-primary margin-left" onClick={logout}>Log out</button>
                </div>
            </div>
        )
    }

    function getNotLoggedMenu() {
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <form onSubmit={login}>
                            <div className="form-row">
                                <div className="form-group row">
                                    <TextInput id="input_email"
                                        value={email}
                                        onChange={onEmailChange}
                                        required={true}
                                        label="Email"
                                        placeholder="Email" />

                                </div>
                                <div className="form-group row">
                                    <TextInput id="input_psw"
                                        value={password}
                                        onChange={onPasswordChange}
                                        required={true}
                                        type="password"
                                        label="Password"
                                        placeholder="Password" />

                                </div>
                            </div>

                            <div className="right">
                                {formState.email.error || formState.password.error ?
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

    return (
        <div className="dropdown dropleft">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {token ? email : ' Log in'}
            </button>

            {token ? getLoggedMenu() : getNotLoggedMenu()}
        </div>
    )
}

export default Account;