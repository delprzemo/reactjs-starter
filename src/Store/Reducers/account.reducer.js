import {LOGIN, LOGOUT} from '../Actions/account.actions';

const initialAccountState = {
    email: '',
    token: '',
    password: ''
}

function accountReducer(state = initialAccountState, action) {
    switch(action.type) {
        case LOGIN :
            return {email: action.payload.email,  password: action.payload.password, token: action.payload.token}
        case LOGOUT :
            return {email: '', token: '', password: ''}
        default: 
            return state;
    }
}

export default accountReducer;