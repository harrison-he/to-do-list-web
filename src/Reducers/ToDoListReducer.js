import {
    GET_TO_DO_ITEMS_START,
    GET_TO_DO_ITEMS_SUCCESS,
    GET_TO_DO_ITEMS_ERROR,
    POST_TO_DO_ITEM_START,
    POST_TO_DO_ITEM_SUCCESS,
    POST_TO_DO_ITEM_ERROR,
    DELETE_TO_DO_ITEM_START,
    DELETE_TO_DO_ITEM_SUCCESS,
    DELETE_TO_DO_ITEM_ERROR
} from './../Constants/ToDoListConstants'

const initialState = {
    toDoItems: [],
    loading: false,
    error: null
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TO_DO_ITEM_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_TO_DO_ITEM_SUCCESS:
            return {
                ...state,
                toDoItems: [...state.toDoItems.filter(toDoItem => toDoItem._id !== action.deletedToDoItem._id)],
                loading: false,
                error: null
            }
        case DELETE_TO_DO_ITEM_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case POST_TO_DO_ITEM_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case POST_TO_DO_ITEM_SUCCESS:
            return {
                ...state,
                toDoItems: [...state.toDoItems, action.toDoItem],
                loading: false
            }
        case POST_TO_DO_ITEM_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case GET_TO_DO_ITEMS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_TO_DO_ITEMS_SUCCESS:
            return {
                ...state,
                toDoItems: action.toDoItems,
                loading: false
            }
        case GET_TO_DO_ITEMS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}

export default ToDoListReducer