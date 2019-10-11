import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ToDoListReducer from './Reducers/ToDoListReducer'

const store = createStore(combineReducers({ToDoListReducer}),applyMiddleware(thunk))

export default store