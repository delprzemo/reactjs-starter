import {createStore} from 'redux'
import rootReducer from './Reducers/root.reducer'

const store = createStore(rootReducer);


// Log the initial state
console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

export default store;
