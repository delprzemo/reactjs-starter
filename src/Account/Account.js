import React, { Component, useState } from 'react'
import './Account.css'
import TextInput from '../Common/TextInput/TextInput'
import { useSelector, useDispatch } from 'react-redux'
import { logout, loginHttpRequest} from '../Store/Actions/account.actions'

function Account() {
    const [formState, setFormState] = useState({
        email: { error: '' },
        password: { error: '' }
    });
    
    const dispatch = useDispatch();
    const email = useSelector(state => state.account.email);
    const token = useSelector(state => state.account.token);

    const [emailValue, changeEmailValue] = useState("");
    const [passwordValue, changePasswordValue] = useState("");

    async function loginUser(e) {
        e.preventDefault();
        dispatch(loginHttpRequest(emailValue, passwordValue));
    }

    function logoutUser() {
        dispatch(logout());
    }

    function onEmailChange(model) {
        changeEmailValue(model.value)
        setFormState({ ...formState, email: { error: model.error } });
    }

    function onPasswordChange(model) {
        changePasswordValue(model.value);
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
                    <button className="btn btn-primary margin-left" onClick={logoutUser}>Log out</button>
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
                        <form onSubmit={loginUser}>
                            <div className="form-row">
                                <div className="form-group row">
                                    <TextInput id="input_email"
                                        value={emailValue}
                                        onChange={onEmailChange}
                                        required={true}
                                        label="Email"
                                        placeholder="Email" />

                                </div>
                                <div className="form-group row">
                                    <TextInput id="input_psw"
                                        value={passwordValue}
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