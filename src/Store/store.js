import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './Reducers/root.reducer'


const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
));


// Log the initial state
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
export default store;
