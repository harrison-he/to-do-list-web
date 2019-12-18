import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ToDoListReducer from './Reducers/ToDoListReducer'
import CommonTasksReducer from './Reducers/CommonTasksReducer'

const store = createStore(combineReducers({ToDoListReducer, CommonTasksReducer}),applyMiddleware(thunk))

export default store