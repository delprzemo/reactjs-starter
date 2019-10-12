import accountReducer from '../Reducers/account.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({account: accountReducer})

export default rootReducer;