import { LOGIN, LOGOUT, LOGIN_REQUEST, LOGIN_REQUEST_COMPLETED } from '../Actions/account.actions';

const initialAccountState = {
    email: '',
    token: '',
    password: '',
    loginRequest: {
        pending: true,
        response: null
    }
}

function accountReducer(state = initialAccountState, action) {
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
            return { email: '', token: '', password: '' }
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