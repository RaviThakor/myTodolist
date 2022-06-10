import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({count: counterReducer})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;