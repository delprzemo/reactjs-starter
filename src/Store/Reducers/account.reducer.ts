import { LOGIN, LOGOUT, LOGIN_REQUEST, LOGIN_REQUEST_COMPLETED, loginActionType } from '../Actions/account.actions';

export interface AccountState {
    email: string,
    token: string,
    password: string,
    loginRequest: {
        pending: boolean,
        response: any
    }
}

const initialAccountState : AccountState = {
    email: '',
    token: '',
    password: '',
    loginRequest: {
        pending: true,
        response: null
    }
}

function accountReducer(state : AccountState = initialAccountState, action: loginActionType) : AccountState{
    switch (action.type) {
        case LOGIN:
            return {
                email: action.user.email,
                password: action.user.password,
                token: action.user.token,
                loginRequest: {
                    pending: false,
                    response: action.response
                }
            }
        case LOGOUT:
            return { ...state, email: '', token: '', password: '' }
        case LOGIN_REQUEST:
            return {
                ...state, loginRequest: {
                    pending: true,
                    response: null
                }
            }
        case LOGIN_REQUEST_COMPLETED:
            return {
                ...state, loginRequest: {
                    pending: false,
                    response: action.response
                }
            }
        default:
            return state;
    }
}

export default accountReducer;