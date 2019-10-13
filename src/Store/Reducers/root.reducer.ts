import accountReducer, { AccountState } from './account.reducer'
import usersReducer from './users.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({account:  accountReducer, users: usersReducer})

export interface RootStateType {
    account:  AccountState, 
    users: any
}

export default rootReducer;