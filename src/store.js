import { createStore, combineReducers } from 'redux'

import ToDoReducer from './Reducers/ToDoReducer'

const store = createStore(combineReducers({ToDoReducer}))

export default store