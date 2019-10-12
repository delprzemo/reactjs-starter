import accountReducer from '../Reducers/account.reducer'
import usersReducer from '../Reducers/users.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({account: accountReducer, users: usersReducer})

export default rootReducer;