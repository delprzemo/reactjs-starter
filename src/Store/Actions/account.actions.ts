import { UserModel } from '../Models/account.models';
const axios = require('axios');

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REQUEST_COMPLETED = 'LOGIN_REQUEST_COMPLETED'

export type loginActionType = {type: string, user: UserModel, response: any}

export function login(user: UserModel, response: any) : loginActionType {
    return { type: LOGIN, user: user, response: response }
}

export function logout() {
    return { type: LOGOUT }
}

export function loginRequest() {
    return { type: LOGIN_REQUEST }
}

export function loginRequestCompleted(response: any) {
    return { type: LOGIN_REQUEST_COMPLETED, response: response }
}

export function loginHttpRequest(email: string, password: string) {
    return function action(dispatch: Function) {
        dispatch(loginRequest());

        const request = axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        });

        return request.then(
            (result : {data: {token: string}}) => dispatch(login({
                token: result.data.token,
                email: email,
                password: password
            }, result)),
            (err: any)  => {
                alert("Wrong email of password");
                dispatch(loginRequestCompleted(err))
            }
        );
    }
}
