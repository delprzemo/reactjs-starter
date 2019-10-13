import { useDispatch } from 'react-redux'
const axios = require('axios');

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REQUEST_COMPLETED = 'LOGIN_REQUEST_COMPLETED'

export function login(user, response) {
    return { type: LOGIN, user: user, response: response }
}

export function logout() {
    return { type: LOGOUT }
}

export function loginRequest() {
    return { type: LOGIN_REQUEST }
}

export function loginRequestCompleted(response) {
    return { type: LOGIN_REQUEST_COMPLETED, response: response }
}

export function loginHttpRequest(email, password) {
    return function action(dispatch) {
        dispatch(loginRequest());

        const request = axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        });

        return request.then(
            result => dispatch(login({
                token: result.data.token,
                email: email,
                password: password
            }, result)),
            err => {
                alert("Wrong email of password");
                dispatch(loginRequestCompleted(err))
            }
        );
    }
}
