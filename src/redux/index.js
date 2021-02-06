import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { waiterReducer } from "./waiter/reducers/waiter-reducer";

const rootReducer = combineReducers({
    waiter: waiterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store