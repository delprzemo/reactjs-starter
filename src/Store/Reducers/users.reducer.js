import { REMOVE_USER, EDIT_USER, SET_PENDING_EDIT_USER } from '../Actions/users.actions';


const usersInitial = [
    { firstName: "Jack", lastName: "Captain", notes: "He is good captain", id: 1 },
    { firstName: "Eva", lastName: "Cesar", notes: "Julius wife", id: 2 },
    { firstName: "Julia", lastName: "Smith", notes: "Very common last name. She works in chemical industry", id: 3 },
    { firstName: "Peter", lastName: "Seedorf", notes: "Don't try to make him angry", id: 4 }
]

const initialState = {
    users: usersInitial,
    pendingEditUser: null
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.id) }
        case EDIT_USER: {
            var foundIndex = state.users.findIndex(user => user.id == action.user.id);
            let users = state.users;
            users[foundIndex] = action.user;
            return { ...state, users: users }
        }
        case SET_PENDING_EDIT_USER:
            return { ...state, pendingEditUser: action.user }
        default:
            return state;
    }
}

export default usersReducer;